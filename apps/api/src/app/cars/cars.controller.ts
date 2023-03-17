import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import {
  CarSortOptions,
  CreateCarRequest,
  FileTypePattern,
  GetCarByIdResponse,
  GetCarResponse,
  Role,
  SortOrder,
  UpdateCarRequest,
} from '@omnihost/interfaces';
import { Car } from '@omnihost/models';
import 'multer';
import { JwtAccessAuthGuard } from '../auth/jwt-auth-access.guard';
import { Roles } from '../auth/roles.decorator';
import { RequiredQuery } from '../decorators/required-query.decorator';
import { validateFileType } from '../files/files.service';
import { prependUuid } from '../utils/files.utils';
import { toBool } from '../utils/query-params.utils';
import { CarsService } from './cars.service';

@ApiTags('Cars')
@Controller('cars')
@ApiBearerAuth()
@UseGuards(JwtAccessAuthGuard)
@Roles(Role.user, Role.manager)
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get a list of all cars, or cars from a given range of dates.',
  })
  @ApiOkResponse({ type: [Car] })
  @ApiQuery({ name: 'from', required: false, example: new Date() })
  @ApiQuery({ name: 'to', required: false, example: new Date() })
  @HttpCode(200)
  async getAllCars(
    @Query('from')
    from: string,
    @Query('to')
    to: string
  ) {
    const fromDate = from ? new Date(Date.parse(from)) : undefined;
    const toDate = to ? new Date(Date.parse(to)) : undefined;

    return this.carsService.findAll(fromDate, toDate);
  }

  @Get()
  @ApiOperation({
    summary: 'Get a list of cars from the given day and before.',
  })
  @ApiOkResponse({ type: [GetCarResponse] })
  @ApiQuery({ name: 'createdAt', required: true, example: new Date() })
  @ApiQuery({ name: 'status', required: false, example: 'true' })
  @ApiQuery({ name: 'search', required: false, example: 'text' })
  @ApiQuery({
    name: 'sortBy',
    enum: CarSortOptions,
    required: false,
    example: CarSortOptions.DELIVERY_TIME,
  })
  @ApiQuery({
    name: 'sortOrder',
    enum: SortOrder,
    required: false,
    example: SortOrder.ASCENDING,
  })
  @HttpCode(200)
  async getCarsBeforeCreatedAt(
    @RequiredQuery('createdAt')
    createdAt: string,
    @Query('status')
    status: string,
    @Query('search')
    search: string,
    @Query('sortBy')
    sortBy: CarSortOptions,
    @Query('sortOrder')
    sortOrder: SortOrder
  ) {
    const createdAtDate = new Date(Date.parse(createdAt));
    return this.carsService.findAllBeforeCreatedAt(
      createdAtDate,
      toBool(status),
      search,
      sortBy,
      sortOrder
    );
  }

  @Get(':carId')
  @ApiOperation({
    summary: 'Get a car by id.',
  })
  @ApiOkResponse({ type: GetCarByIdResponse })
  @HttpCode(200)
  async getCarById(@Param('carId', ParseUUIDPipe) carId: string) {
    const car = await this.carsService.findById(carId);
    const signedUrls = await this.carsService.getFilesLink(car.files);
    return { ...car, downloadUrls: signedUrls };
  }

  @Post()
  @ApiOperation({
    summary: 'Create a car entry.',
  })
  @ApiCreatedResponse({ type: Car })
  @ApiConsumes('multipart/form-data')
  @HttpCode(201)
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      fileFilter(req, file, callback) {
        file.originalname = prependUuid(file.originalname);
        return validateFileType(req, file, callback, FileTypePattern.PICTURES_AND_VIDEO);
      },
    })
  )
  async createCar(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() carData: CreateCarRequest
  ) {
    return this.carsService.createCar(carData, files || []);
  }

  @Patch(':carId')
  @ApiOperation({
    summary: 'Update a car entry.',
  })
  @ApiCreatedResponse({ type: Car })
  @HttpCode(200)
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      fileFilter(req, file, callback) {
        file.originalname = prependUuid(file.originalname);
        return validateFileType(req, file, callback, FileTypePattern.PICTURES_AND_VIDEO);
      },
    })
  )
  async updateCar(
    @Param('carId', ParseUUIDPipe) carId: string,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() carData: UpdateCarRequest
  ) {
    return this.carsService.updateCar(carId, carData, files || []);
  }

  @Patch(':carId/files/add')
  @ApiOperation({
    summary: 'Add more files to a car.',
  })
  @ApiOkResponse({ type: Car })
  @HttpCode(200)
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      fileFilter(req, file, callback) {
        file.originalname = prependUuid(file.originalname);
        return validateFileType(req, file, callback, FileTypePattern.PICTURES_AND_VIDEO);
      },
    })
  )
  async addCarFiles(
    @Param('carId', ParseUUIDPipe) carId: string,
    @UploadedFiles()
    files: Array<Express.Multer.File>
  ) {
    return this.carsService.updateCar(carId, null, files || []);
  }

  @Patch(':carId/files/remove')
  @ApiOperation({
    summary: 'Remove files from a car.',
  })
  @ApiOkResponse({ type: Car })
  @HttpCode(200)
  async removeCarFiles(@Param('carId', ParseUUIDPipe) carId: string, @Body() fileNames: string[]) {
    return this.carsService.removeCarFiles(carId, fileNames);
  }

  @Patch(':carId/files/clear')
  @ApiOperation({
    summary: "Clear a car's files.",
  })
  @ApiOkResponse({ type: Car })
  @HttpCode(200)
  async clearCarFiles(@Param('carId', ParseUUIDPipe) carId: string) {
    return this.carsService.clearCarFiles(carId);
  }
}
