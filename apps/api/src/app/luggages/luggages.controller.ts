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
  CreateLuggageRequest,
  GetLuggageByIdResponse,
  GetLuggageResponse,
  LuggageSortOptions,
  LuggageType,
  Role,
  SortOrder,
  UpdateLuggageRequest,
} from '@omnihost/interfaces';
import { Luggage } from '@omnihost/models';
import 'multer';
import { JwtAccessAuthGuard } from '../auth/jwt-auth-access.guard';
import { Roles } from '../auth/roles.decorator';
import { RequiredQuery } from '../decorators/required-query.decorator';
import { FileTypePattern } from '../files/file-type-patterns.enum';
import { validateFileType } from '../files/files.service';
import { toBool } from '../utils/query-params.utils';
import { LuggagesService } from './luggages.service';

@ApiTags('Luggages')
@Controller('luggages')
@ApiBearerAuth()
@UseGuards(JwtAccessAuthGuard)
@Roles(Role.user, Role.manager)
export class LuggagesController {
  constructor(private luggagesService: LuggagesService) {}

  @Get(':luggageType')
  @ApiOperation({
    summary: 'Get a list of checked in luggages for the given day.',
  })
  @ApiOkResponse({ type: [GetLuggageResponse] })
  @ApiQuery({ name: 'createdAt', required: true, example: new Date() })
  @ApiQuery({ name: 'status', required: false, example: 'true' })
  @ApiQuery({
    name: 'location',
    required: false,
    example: 'Front',
  })
  @ApiQuery({ name: 'search', required: false, example: 'text' })
  @ApiQuery({
    name: 'sortBy',
    enum: LuggageSortOptions,
    required: false,
    example: LuggageSortOptions.ARRIVAL_TIME,
  })
  @ApiQuery({
    name: 'sortOrder',
    enum: SortOrder,
    required: false,
    example: SortOrder.ASCENDING,
  })
  @HttpCode(200)
  async getLuggagesByLuggageTypeAndCreatedAt(
    @Param('luggageType')
    luggageType: LuggageType,
    @RequiredQuery('createdAt')
    createdAt: string,
    @Query('status')
    status: string,
    @Query('location')
    location: string,
    @Query('search')
    search: string,
    @Query('sortBy')
    sortBy: LuggageSortOptions,
    @Query('sortOrder')
    sortOrder: SortOrder
  ) {
    const createdAtDate = new Date(Date.parse(createdAt));
    return this.luggagesService.findAllByLuggageTypeAndCreatedAt(
      luggageType,
      createdAtDate,
      toBool(status),
      location,
      search,
      sortBy,
      sortOrder
    );
  }

  @Get('id/:luggageId')
  @ApiOperation({
    summary: 'Get a luggage by id.',
  })
  @ApiOkResponse({ type: GetLuggageByIdResponse })
  @HttpCode(200)
  async getCarById(@Param('luggageId', ParseUUIDPipe) luggageId: string) {
    const luggage = await this.luggagesService.findById(luggageId);
    const signedUrls = await this.luggagesService.getFilesLink(luggage.files);
    return { ...luggage, downloadUrls: signedUrls };
  }

  @Post()
  @ApiOperation({
    summary: 'Create a luggage entry.',
  })
  @ApiCreatedResponse({ type: Luggage })
  @ApiConsumes('multipart/form-data')
  @HttpCode(201)
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      fileFilter(req, file, callback) {
        return validateFileType(req, file, callback, FileTypePattern.PICTURES);
      },
    })
  )
  async createLuggage(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() luggageData: CreateLuggageRequest
  ) {
    return this.luggagesService.createLuggage(luggageData, files || []);
  }

  @Patch(':luggageId')
  @ApiOperation({
    summary: 'Update a luggage entry.',
  })
  @ApiOkResponse({ type: Luggage })
  @HttpCode(200)
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      fileFilter(req, file, callback) {
        return validateFileType(req, file, callback, FileTypePattern.PICTURES);
      },
    })
  )
  async updateLuggage(
    @Param('luggageId', ParseUUIDPipe) luggageId: string,
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() luggageData: UpdateLuggageRequest
  ) {
    return this.luggagesService.updateLuggage(luggageId, luggageData, files || []);
  }

  @Patch(':luggageId/files/add')
  @ApiOperation({
    summary: 'Add more files to a luggage.',
  })
  @ApiOkResponse({ type: Luggage })
  @HttpCode(200)
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      fileFilter(req, file, callback) {
        return validateFileType(req, file, callback, FileTypePattern.PICTURES);
      },
    })
  )
  async addLuggageFiles(
    @Param('luggageId', ParseUUIDPipe) luggageId: string,
    @UploadedFiles()
    files: Array<Express.Multer.File>
  ) {
    return this.luggagesService.updateLuggage(luggageId, null, files || []);
  }

  @Patch(':luggageId/files/remove')
  @ApiOperation({
    summary: 'Remove files from a luggage.',
  })
  @ApiOkResponse({ type: Luggage })
  @HttpCode(200)
  async removeLuggageFiles(
    @Param('luggageId', ParseUUIDPipe) luggageId: string,
    @Body() fileNames: string[]
  ) {
    return this.luggagesService.removeLuggageFiles(luggageId, fileNames);
  }

  @Patch(':luggageId/files/clear')
  @ApiOperation({
    summary: "Clear a luggage's files.",
  })
  @ApiOkResponse({ type: Luggage })
  @HttpCode(200)
  async clearLuggageFiles(@Param('luggageId', ParseUUIDPipe) luggageId: string) {
    return this.luggagesService.clearLuggageFiles(luggageId);
  }
}
