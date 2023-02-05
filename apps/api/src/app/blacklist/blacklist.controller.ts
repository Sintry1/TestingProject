import {
  BadRequestException,
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
  async createBlacklist(
    @UploadedFiles() files: Array<Express.Multer.File>,
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
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() blacklistData: UpdateBlacklistRequest
  ) {
    return await this.blacklistService.updateBlacklist(blacklistId, blacklistData, files);
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
        const nameParts = file.originalname.split('.');
        const fileType = nameParts[nameParts.length - 1];

        if (!fileType.match(FILE_TYPES)) {
          req.fileValidationError = `Invalid file type for file: ${file.originalname}`;
          return callback(
            new BadRequestException(`Invalid file type for file: ${file.originalname}`),
            false
          );
        }
        return callback(null, true);
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
    summary: 'Remove files from an blacklist.',
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
