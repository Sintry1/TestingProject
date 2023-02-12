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
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import {
  BikeSortOptions,
  CreateBikeRequest,
  Role,
  SortOrder,
  UpdateBikeRequest,
} from '@omnihost/interfaces';
import { Bike } from '@omnihost/models';
import { JwtAccessAuthGuard } from '../auth/jwt-auth-access.guard';
import { Roles } from '../auth/roles.decorator';
import { RequiredQuery } from '../decorators/required-query.decorator';
import { toBool } from '../utils/query-params.utils';
import { BikesService } from './bikes.service';

@ApiTags('Bikes')
@Controller('bikes')
@ApiBearerAuth()
@UseGuards(JwtAccessAuthGuard)
@Roles(Role.user, Role.manager)
export class BikesController {
  constructor(private bikesService: BikesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get a list of bikes from the given day.',
  })
  @ApiOkResponse({ type: [Bike] })
  @ApiQuery({ name: 'createdAt', required: true, example: new Date() })
  @ApiQuery({ name: 'status', required: false, example: 'true' })
  @ApiQuery({ name: 'search', required: false, example: 'text' })
  @ApiQuery({
    name: 'sortBy',
    enum: BikeSortOptions,
    required: false,
    example: BikeSortOptions.NAME,
  })
  @ApiQuery({
    name: 'sortOrder',
    enum: SortOrder,
    required: false,
    example: SortOrder.ASCENDING,
  })
  @HttpCode(200)
  async getBikesByCreatedAt(
    @RequiredQuery('createdAt')
    createdAt: string,
    @Query('status')
    status: string,
    @Query('search')
    search: string,
    @Query('sortBy')
    sortBy: BikeSortOptions,
    @Query('sortOrder')
    sortOrder: SortOrder
  ) {
    const createdAtDate = new Date(Date.parse(createdAt));
    return this.bikesService.findAllByCreatedAt(
      createdAtDate,
      toBool(status),
      search,
      sortBy,
      sortOrder
    );
  }

  @Post()
  @ApiOperation({
    summary: 'Create a bike entry.',
  })
  @ApiCreatedResponse({ type: Bike })
  @HttpCode(201)
  async createBike(@Body() bikeData: CreateBikeRequest) {
    return this.bikesService.createBike(bikeData);
  }

  @Patch(':bikeId')
  @ApiOperation({
    summary: 'Update a bike entry.',
  })
  @ApiCreatedResponse({ type: Bike })
  @HttpCode(200)
  async updateBike(
    @Param('bikeId', ParseUUIDPipe) bikeId: string,
    @Body() bikeData: UpdateBikeRequest
  ) {
    return this.bikesService.updateBike(bikeId, bikeData);
  }
}
