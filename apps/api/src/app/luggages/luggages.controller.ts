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
  CreateLuggageRequest,
  LuggageSortOptions,
  LuggageType,
  Role,
  SortOrder,
  UpdateLuggageRequest,
} from '@omnihost/interfaces';
import { Luggage } from '@omnihost/models';
import { Roles } from '../auth/roles.decorator';
import { RequiredQuery } from '../decorators/required-query.decorator';
import { toBool } from '../utils/query-params.utils';
import { LuggagesService } from './luggages.service';

@ApiTags('Luggages')
@Controller('luggages')
@ApiBearerAuth()
@Roles(Role.user, Role.manager)
export class LuggagesController {
  constructor(private luggagesService: LuggagesService) {}

  @Get(':luggageType')
  @ApiOperation({
    summary: 'Get a list of checked in luggages for the given day.',
  })
  @ApiOkResponse({ type: [Luggage] })
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

  @Post()
  @ApiOperation({
    summary: 'Create a luggage entry.',
  })
  @ApiCreatedResponse({ type: Luggage })
  @HttpCode(201)
  async createLuggage(@Body() luggageData: CreateLuggageRequest) {
    return this.luggagesService.createLuggage(luggageData);
  }

  @Patch(':luggageId')
  @ApiOperation({
    summary: 'Update a luggage entry.',
  })
  @ApiCreatedResponse({ type: Luggage })
  @HttpCode(200)
  async updateLuggage(
    @Param('luggageId', ParseUUIDPipe) luggageId: string,
    @Body() luggageData: UpdateLuggageRequest
  ) {
    return this.luggagesService.updateLuggage(luggageId, luggageData);
  }
}
