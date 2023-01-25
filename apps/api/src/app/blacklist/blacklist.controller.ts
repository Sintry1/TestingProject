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
  ApiTags,
} from '@nestjs/swagger';
import { CreateBlacklistRequest, Role, UpdateBlacklistRequest } from '@omnihost/interfaces';
import { Blacklist } from '@omnihost/models';
import { Roles } from '../auth/roles.decorator';
import { BlacklistService } from './blacklist.service';

@ApiTags('Blacklist')
@Controller('blacklist')
@ApiBearerAuth()
@Roles(Role.user, Role.manager)
export class BlacklistController {
  constructor(private blacklistService: BlacklistService) {}

  @Get()
  @ApiOperation({ summary: 'Get a list of blacklist entries.' })
  @ApiOkResponse({ type: [Blacklist] })
  @HttpCode(200)
  async getBlacklist() {
    return this.blacklistService.fetchAllBlacklist();
  }

  @Post()
  @ApiOperation({
    summary: 'Create a blacklist entry.',
  })
  @ApiCreatedResponse({ type: Blacklist })
  @HttpCode(201)
  async createBlacklistk(@Body() blacklistData: CreateBlacklistRequest) {
    return this.blacklistService.createBlacklist(blacklistData);
  }
}
