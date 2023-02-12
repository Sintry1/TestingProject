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
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import {
  AnnouncementRequest,
  AnnouncementSortOptions,
  DeleteAnnouncementResponse,
  GetAnnouncementByIdResponse,
  GetAnnouncementResponse,
  Role,
  SortOrder,
} from '@omnihost/interfaces';
import { Announcement } from '@omnihost/models';
import 'multer';
import { Roles } from '../auth/roles.decorator';
import { FileTypePattern } from '../files/file-type-patterns.enum';
import { validateFileType } from '../files/files.service';
import { AnnouncementsService } from './announcements.service';

@ApiTags('Announcements')
@Controller('announcements')
@ApiBearerAuth()
@Roles(Role.user, Role.manager)
export class AnnouncementsController {
  constructor(private announcementsService: AnnouncementsService) {}

  @Get()
  @ApiOkResponse({ type: [GetAnnouncementResponse] })
  @ApiOperation({
    summary: 'Get a list of announcements.',
  })
  @ApiQuery({ name: 'showFrom', required: false, example: new Date() })
  @ApiQuery({ name: 'showTo', required: false, example: new Date() })
  @ApiQuery({ name: 'search', required: false, example: 'text' })
  @ApiQuery({
    name: 'sortBy',
    enum: AnnouncementSortOptions,
    required: false,
    example: AnnouncementSortOptions.SHOW_FROM,
  })
  @ApiQuery({
    name: 'sortOrder',
    enum: SortOrder,
    required: false,
    example: SortOrder.ASCENDING,
  })
  @HttpCode(200)
  async getAnnouncements(
    @Query('showFrom')
    showFrom: string | undefined,
    @Query('showTo')
    showTo: string | undefined,
    @Query('search')
    search: string,
    @Query('sortBy')
    sortBy: AnnouncementSortOptions,
    @Query('sortOrder')
    sortOrder: SortOrder
  ) {
    const showFromDate: Date | undefined = showFrom ? new Date(Date.parse(showFrom)) : undefined;
    const showToDate: Date | undefined = showTo ? new Date(Date.parse(showTo)) : undefined;

    return this.announcementsService.findAll(showFromDate, showToDate, search, sortBy, sortOrder);
  }

  @Get(':announcementId')
  @ApiOperation({
    summary: 'Get an announcement by id.',
  })
  @ApiOkResponse({ type: GetAnnouncementByIdResponse })
  @HttpCode(200)
  async getAnnouncementById(@Param('announcementId', ParseUUIDPipe) announcementId: string) {
    const announcement = await this.announcementsService.findById(announcementId);
    const signedUrls = await this.announcementsService.getFilesLink(announcement.files);

    return { ...announcement, downloadUrls: signedUrls };
  }

  @Post()
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Create an announcement.',
  })
  @ApiCreatedResponse({ type: [Announcement] })
  @ApiConsumes('multipart/form-data')
  @HttpCode(201)
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      fileFilter(req, file, callback) {
        return validateFileType(req, file, callback, FileTypePattern.DOCUMENT_AND_PICTURES);
      },
    })
  )
  async createAnnouncement(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() announcementData: AnnouncementRequest
  ) {
    return this.announcementsService.createAnnouncement(announcementData, files || []);
  }

  @Patch(':announcementId')
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Update an announcement.',
  })
  @ApiOkResponse({ type: Announcement })
  @HttpCode(200)
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      fileFilter(req, file, callback) {
        return validateFileType(req, file, callback, FileTypePattern.DOCUMENT_AND_PICTURES);
      },
    })
  )
  async updateAnnouncement(
    @Param('announcementId', ParseUUIDPipe) announcementId: string,
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() announcementData: AnnouncementRequest
  ) {
    return this.announcementsService.updateAnnouncement(
      announcementId,
      announcementData,
      files || []
    );
  }

  @Delete(':announcementId')
  @Roles(Role.manager)
  @ApiOperation({ summary: 'Delete an announcement.' })
  @ApiOkResponse({ type: DeleteAnnouncementResponse })
  @HttpCode(200)
  async deleteAnnouncement(@Param('announcementId', ParseUUIDPipe) announcementId: string) {
    return this.announcementsService.deleteAnnouncement(announcementId);
  }

  @Patch(':announcementId/files/add')
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Add more files to an announcement.',
  })
  @ApiOkResponse({ type: Announcement })
  @HttpCode(200)
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      fileFilter(req, file, callback) {
        return validateFileType(req, file, callback, FileTypePattern.DOCUMENT_AND_PICTURES);
      },
    })
  )
  async addAnnouncementFiles(
    @Param('announcementId', ParseUUIDPipe) announcementId: string,
    @UploadedFiles()
    files: Array<Express.Multer.File>
  ) {
    return this.announcementsService.updateAnnouncement(announcementId, null, files || []);
  }

  @Patch(':announcementId/files/remove')
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Remove files from an announcement.',
  })
  @ApiOkResponse({ type: Announcement })
  @HttpCode(200)
  async removeAnnouncementFiles(
    @Param('announcementId', ParseUUIDPipe) announcementId: string,
    @Body() fileNames: string[]
  ) {
    return this.announcementsService.removeAnnouncementFiles(announcementId, fileNames);
  }

  @Patch(':announcementId/files/clear')
  @Roles(Role.manager)
  @ApiOperation({
    summary: "Clear an announcement's files.",
  })
  @ApiOkResponse({ type: Announcement })
  @HttpCode(200)
  async clearAnnouncementFiles(@Param('announcementId', ParseUUIDPipe) announcementId: string) {
    return this.announcementsService.clearAnnouncementFiles(announcementId);
  }
}
