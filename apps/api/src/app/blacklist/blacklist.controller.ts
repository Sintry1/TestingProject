import {
  Body,
  Controller,
  Delete,
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
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CreateBlacklistRequest,
  DeleteBlacklistResponse,
  Role,
  UpdateBlacklistRequest,
} from '@omnihost/interfaces';
import { Blacklist } from '@omnihost/models';
import { Roles } from '../auth/roles.decorator';
import { BlacklistService } from './blacklist.service';

@ApiTags('Blacklist')
@Controller('blacklist')
@ApiBearerAuth()
@Roles(Role.user, Role.manager)
export class BlacklistController {
  constructor(private blacklistService: BlacklistService) {}
  @Post()
  @ApiOperation({
    summary: 'Create a blacklist entry.',
  })
  @ApiCreatedResponse({ type: Blacklist })
  @HttpCode(201)
  async createBlacklist(@Body() blacklistData: CreateBlacklistRequest) {
    return this.blacklistService.createBlacklist(blacklistData);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of blacklist entries.' })
  @ApiOkResponse({ type: [Blacklist] })
  @HttpCode(200)
  async getBlacklist() {
    return this.blacklistService.fetchAllBlacklist();
  }

  @Get(':blacklistId')
  @ApiOperation({
    summary: 'Fetch a specific blacklist entry',
  })
  @ApiResponse({ type: Blacklist })
  @HttpCode(200)
  async getBlacklistById(@Param('blacklistId', ParseUUIDPipe) blacklistId: string) {
    return await this.blacklistService.fetchBlacklistbyId(blacklistId);
  }

  @Patch(':blacklistId')
  @ApiOperation({
    summary: 'Update a specific blacklsit entry',
  })
  @ApiResponse({ type: Blacklist })
  @HttpCode(200)
  async updateBlacklistEntry(
    @Param('blacklistId', ParseUUIDPipe) blacklistId: string,
    @Body() blacklistData: UpdateBlacklistRequest
  ) {
    return await this.blacklistService.updateBlacklist(blacklistId, blacklistData);
  }

  @Delete(':blacklistId')
  @ApiOperation({
    summary: 'Delete a blacklist entry.',
  })
  @Roles(Role.manager)
  @ApiResponse({ type: DeleteBlacklistResponse })
  @HttpCode(200)
  async deleteBlacklistEntry(@Param('blacklistId', ParseUUIDPipe) blacklistId: string) {
    return this.blacklistService.deleteBlacklistEntry(blacklistId);
  }
}
