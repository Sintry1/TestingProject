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
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CreateBlacklistRequest,
  DeleteBlacklistResponse,
  FileTypePattern,
  Role,
  UpdateBlacklistRequest,
} from '@omnihost/interfaces';
import { Blacklist } from '@omnihost/models';
import { Roles } from '../auth/roles.decorator';
import { FilesService, validateFileType } from '../files/files.service';
import { BlacklistService } from './blacklist.service';

@ApiTags('Blacklist')
@Controller('blacklist')
@ApiBearerAuth()
@Roles(Role.user, Role.manager)
export class BlacklistController {
  constructor(private blacklistService: BlacklistService, private filesService: FilesService) {}

  @Post()
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Create a blacklist entry.',
  })
  @ApiCreatedResponse({ type: [Blacklist] })
  @ApiConsumes('multipart/form-data')
  @HttpCode(201)
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      fileFilter(req, file, callback) {
        return validateFileType(req, file, callback, FileTypePattern.PICTURES_AND_VIDEO);
      },
    })
  )
  async createBlacklist(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() blacklistData: CreateBlacklistRequest
  ) {
    return this.blacklistService.createBlacklist(blacklistData, files || []);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of blacklist entries.' })
  @ApiOkResponse({ type: [Blacklist] })
  @HttpCode(200)
  async getBlacklist() {
    return this.blacklistService.findAll();
  }

  @Get(':blacklistId')
  @ApiOperation({
    summary: 'Fetch a specific blacklist entry',
  })
  @ApiResponse({ type: Blacklist })
  @HttpCode(200)
  async getBlacklistById(@Param('blacklistId', ParseUUIDPipe) blacklistId: string) {
    const blacklist = await this.blacklistService.fetchBlacklistById(blacklistId);
    const signedUrls = await this.blacklistService.getFilesLink(blacklist.files);

    return { ...blacklist, downloadUrls: signedUrls };
  }

  @Patch(':blacklistId')
  @ApiOperation({
    summary: 'Update a specific blacklist entry',
  })
  @ApiResponse({ type: Blacklist })
  @HttpCode(200)
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      fileFilter(req, file, callback) {
        return validateFileType(req, file, callback, FileTypePattern.PICTURES_AND_VIDEO);
      },
    })
  )
  async updateBlacklistEntry(
    @Param('blacklistId', ParseUUIDPipe) blacklistId: string,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() blacklistData: UpdateBlacklistRequest
  ) {
    return await this.blacklistService.updateBlacklist(blacklistId, blacklistData, files || []);
  }

  @Patch(':blacklistId/files/add')
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Add file(s) to a blacklist entry.',
  })
  @ApiResponse({ type: Blacklist })
  @HttpCode(200)
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      fileFilter(req, file, callback) {
        return validateFileType(req, file, callback, FileTypePattern.PICTURES_AND_VIDEO);
      },
    })
  )
  async addBlacklistFile(
    @Param('blacklistId', ParseUUIDPipe) blacklistId: string,
    @UploadedFiles() files: Array<Express.Multer.File>
  ) {
    return this.blacklistService.updateBlacklist(blacklistId, null, files);
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

  @Patch(':blacklistId/files/remove')
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Remove files from a blacklist.',
  })
  @ApiOkResponse({ type: Blacklist })
  @HttpCode(200)
  async removeBlacklistFiles(
    @Param('blacklistId', ParseUUIDPipe) blacklistId: string,
    @Body() fileNames: string[]
  ) {
    return this.blacklistService.removeBlacklistFiles(blacklistId, fileNames);
  }

  @Patch(':blacklistId/files/clear')
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Clear a blacklist entries files.',
  })
  @ApiOkResponse({ type: Blacklist })
  @HttpCode(200)
  async clearBlacklistFiles(@Param('blacklistId', ParseUUIDPipe) blacklistId: string) {
    return this.blacklistService.clearBlacklistFiles(blacklistId);
  }
}
