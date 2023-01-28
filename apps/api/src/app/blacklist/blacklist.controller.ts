import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
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
import { FilesService } from '../files/files.service';
import { BlacklistService } from './blacklist.service';

const FILE_MAX_SIZE = 10000000;
const FILE_TYPES = /(png|jpg|jpeg)\b/;

@ApiTags('Blacklist')
@Controller('blacklist')
@ApiBearerAuth()
@Roles(Role.user, Role.manager)
export class BlacklistController {
  constructor(private blacklistService: BlacklistService, private filesService: FilesService) {}

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

  @Patch(':blacklistId')
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Add file(s) to a blacklist entry.',
  })
  @ApiResponse({ type: Blacklist })
  @HttpCode(200)
  @UseInterceptors(FilesInterceptor('blacklist', 20))
  async addBlacklistFile(
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: FILE_TYPES })
        .addMaxSizeValidator({ maxSize: FILE_MAX_SIZE })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        })
    )
    @Param('blacklistId', ParseUUIDPipe) blacklistId: string,
    @Body() file: Express.Multer.File
  ) {
    return this.blacklistService.updateBlacklistFile(blacklistId, file);
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
