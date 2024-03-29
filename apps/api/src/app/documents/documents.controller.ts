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
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import {
  CreateDocumentRequest,
  DeleteDocumentResponse,
  DocumentSortOptions,
  GetDocumentByIdResponse,
  Role,
  SortOrder,
  UpdateDocumentRequest,
} from '@omnihost/interfaces';
import { Document } from '@omnihost/models';
import 'multer';
import { JwtAccessAuthGuard } from '../auth/jwt-auth-access.guard';
import { Roles } from '../auth/roles.decorator';
import { toBool } from '../utils/query-params.utils';
import { DocumentsService } from './documents.service';
import { prependUuid } from '../utils/files.utils';

const FILE_MAX_SIZE = 50000000;
const FILE_TYPES = /(pdf|docx)\b/;

@ApiTags('Documents')
@Controller('documents')
@ApiBearerAuth()
@UseGuards(JwtAccessAuthGuard)
@Roles(Role.user, Role.manager)
export class DocumentsController {
  constructor(private documentsService: DocumentsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get a list of documents.',
  })
  @ApiOkResponse({ type: [Document] })
  @ApiQuery({ name: 'showOnDashboard', required: false, example: 'true' })
  @ApiQuery({ name: 'search', required: false, example: 'text' })
  @ApiQuery({
    name: 'sortBy',
    enum: DocumentSortOptions,
    required: false,
    example: DocumentSortOptions.LAST_VIEWED_AT,
  })
  @ApiQuery({
    name: 'sortOrder',
    enum: SortOrder,
    required: false,
    example: SortOrder.ASCENDING,
  })
  @HttpCode(200)
  async getDocuments(
    @Query('showOnDashboard')
    showOnDashboard: string,
    @Query('search')
    search: string,
    @Query('sortBy')
    sortBy: DocumentSortOptions,
    @Query('sortOrder')
    sortOrder: SortOrder
  ) {
    return this.documentsService.findAll(toBool(showOnDashboard), search, sortBy, sortOrder);
  }

  @Get(':documentId')
  @ApiOperation({
    summary: 'Get a document entry by id.',
  })
  @ApiOkResponse({ type: GetDocumentByIdResponse })
  @HttpCode(200)
  async getDocumentById(@Param('documentId', ParseUUIDPipe) documentId: string) {
    const document = await this.documentsService.findById(documentId);
    const signedUrl = await this.documentsService.getFileLink(document.documentName);
    return { ...document, downloadUrl: signedUrl.url };
  }

  @Post()
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Create a document entry.',
  })
  @ApiCreatedResponse({ type: Document })
  @ApiConsumes('multipart/form-data')
  @HttpCode(201)
  @UseInterceptors(FileInterceptor('document'))
  async createDocument(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: FILE_TYPES })
        .addMaxSizeValidator({ maxSize: FILE_MAX_SIZE })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        })
    )
    document: Express.Multer.File,
    @Body() documentData: CreateDocumentRequest
  ) {
    document.originalname = prependUuid(document.originalname);
    return this.documentsService.createDocument(documentData, document);
  }

  @Patch(':documentId')
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Update a document entry.',
  })
  @ApiCreatedResponse({ type: Document })
  @HttpCode(200)
  async updateDocument(
    @Param('documentId', ParseUUIDPipe) documentId: string,
    @Body() documentData: UpdateDocumentRequest
  ) {
    return this.documentsService.updateDocument(documentId, documentData);
  }

  @Patch('/file/:documentId')
  @Roles(Role.manager)
  @ApiOperation({
    summary: 'Upload a new file for the document entry.',
  })
  @ApiCreatedResponse({ type: Document })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        document: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('document'))
  async updateDocumentFile(
    @Param('documentId', ParseUUIDPipe) documentId: string,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: FILE_TYPES })
        .addMaxSizeValidator({ maxSize: FILE_MAX_SIZE })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        })
    )
    document: Express.Multer.File
  ) {
    document.originalname = prependUuid(document.originalname);
    return this.documentsService.updateDocumentFile(documentId, document);
  }

  @Delete(':documentId')
  @Roles(Role.manager)
  @ApiOperation({ summary: 'Delete a document entry.' })
  @ApiOkResponse({ type: DeleteDocumentResponse })
  @HttpCode(200)
  async deleteDocument(@Param('documentId', ParseUUIDPipe) documentId: string) {
    return this.documentsService.deleteDocument(documentId);
  }
}
