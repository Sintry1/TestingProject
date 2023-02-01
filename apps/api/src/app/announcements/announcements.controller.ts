import {
  BadRequestException,
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
import {
  ApiBearerAuth,
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
import { Roles } from '../auth/roles.decorator';
import { AnnouncementsService } from './announcements.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import 'multer';

const FILE_TYPES = /(png|jpg|jpeg)\b/;

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
  @HttpCode(201)
  @UseInterceptors(
    FilesInterceptor('files', 5, {
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
        // This does not because the `file` does not contain the `size` attribute, unlike what the docs state.
        // if (file.size > FILE_MAX_SIZE) {
        //   req.fileValidationError = `Invalid file size for file: ${file.originalname}`;
        //   return callback(new BadRequestException(`Invalid file size for file: ${file.originalname}`), false);
        // }

        return callback(null, true);
      },
    })
  )
  async createAnnouncement(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() announcementData: AnnouncementRequest
  ) {
    return this.announcementsService.createAnnouncement(announcementData, files);
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
  async updateAnnouncement(
    @Param('announcementId', ParseUUIDPipe) announcementId: string,
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() announcementData: AnnouncementRequest
  ) {
    return this.announcementsService.updateAnnouncement(
      announcementId,
      announcementData,
      files
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
  async addAnnouncementFiles(
    @Param('announcementId', ParseUUIDPipe) announcementId: string,
    @UploadedFiles()
    files: Array<Express.Multer.File>
  ) {
    return this.announcementsService.updateAnnouncement(announcementId, null, files);
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
