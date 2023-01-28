import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnnouncementRequest, AnnouncementSortOptions, SortOrder } from '@omnihost/interfaces';
import { Announcement } from '@omnihost/models';
import { Between, ILike, Repository } from 'typeorm';
import { FilesService } from '../files/files.service';
import 'multer';

const FILE_MAX_SIZE = 50000000;

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(Announcement)
    private readonly announcementRepo: Repository<Announcement>,
    private readonly fileService: FilesService
  ) {}

  async findAll(
    showFrom: Date | undefined,
    showTo: Date | undefined,
    search: string | undefined,
    sortBy: AnnouncementSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    let baseConditions = undefined;
    if (showFrom || showTo) {
      baseConditions = {
        showFrom: showFrom
          ? Between<Date>(
              new Date(showFrom.setUTCHours(0, 0, 0, 0)),
              new Date(showFrom.setUTCHours(23, 59, 59, 999))
            )
          : undefined,
        showTo: showTo
          ? Between<Date>(
              new Date(showTo.setUTCHours(0, 0, 0, 0)),
              new Date(showTo.setUTCHours(23, 59, 59, 999))
            )
          : undefined,
      };
    }

    const searchCondition = search ? ILike(`%${search}%`) : undefined;

    return this.announcementRepo.find({
      where:
        baseConditions || searchCondition
          ? [
              { ...baseConditions, title: searchCondition },
              { ...baseConditions, comments: searchCondition },
            ]
          : undefined,
      order: { ...this.getSortingConditions(sortBy, sortOrder) },
    });
  }

  async findById(announcementId: string) {
    return await this.announcementRepo.findOneByOrFail({ announcementId });
  }

  async createAnnouncement(
    announcementData: AnnouncementRequest,
    documents: Express.Multer.File[]
  ) {
    try {
      for (const document of documents) {
        // We are doing size validation here, and not in the file interceptor because it is only here that
        // we do have access to the `size` attribute.
        if (document.size > FILE_MAX_SIZE) {
          return new BadRequestException(`Invalid file size for file: ${document.originalname}`);
        }
        await this.fileService.uploadFile(document.buffer, document.originalname);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to upload the documents. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return await this.announcementRepo.save({
      ...announcementData,
      files: this.toDocumentNames(documents),
    });
  }

  async updateAnnouncement(
    announcementId: string,
    announcementData: AnnouncementRequest,
    documents: Express.Multer.File[]
  ) {
    let announcement: Announcement;
    if (documents.length !== 0) {
      const result = await this.updateAnnouncementFiles(announcementId, documents);
      if (result instanceof BadRequestException) {
        return result;
      } else {
        announcement = result;
      }
    } else {
      announcement = await this.announcementRepo.findOneByOrFail({ announcementId });
    }

    for (const key in announcementData) {
      if (Object.prototype.hasOwnProperty.call(announcementData, key)) {
        announcement[key] = announcementData[key];
      }
    }

    return await this.announcementRepo.save(announcement);
  }

  async deleteAnnouncement(announcementId: string) {
    const announcement = await this.announcementRepo.findOneByOrFail({ announcementId });

    try {
      for (const document of announcement.files) {
        await this.fileService.deleteFile(document);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to delete the announcement. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    await this.announcementRepo.remove(announcement);
    return { message: 'Deleted.' };
  }

  async getFilesLink(documentNames: string[]) {
    try {
      return await this.toDocuments(documentNames);
    } catch (error) {
      throw new HttpException(
        "Failed to get the documents' links. Please try again later.",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateAnnouncementFiles(announcementId: string, documents: Express.Multer.File[]) {
    const announcement = await this.announcementRepo.findOneByOrFail({ announcementId });
    console.log(announcement.files.length + documents.length, this.toDocumentNames(documents));
    if (announcement.files.length + documents.length > 5) {
      return new BadRequestException(
        `File size limit surpassed. An announcement can have a maximum of 5 files. It currently has ${announcement.files.length}`
      );
    }

    try {
      for (const document of documents) {
        if (document.size > FILE_MAX_SIZE) {
          console.log('HELLO');
          return new BadRequestException(`Invalid file size for file: ${document.originalname}`);
        }

        await this.fileService.uploadFile(document.buffer, document.originalname);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to upload the documents. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    announcement.files.push(...this.toDocumentNames(documents));

    return await this.announcementRepo.save(announcement);
  }

  async removeAnnouncementFiles(announcementId: string, documentNames: string[]) {
    const announcement = await this.announcementRepo.findOneByOrFail({ announcementId });

    try {
      for (const document of announcement.files) {
        if (documentNames.includes(document)) {
          await this.fileService.deleteFile(document);
          announcement.files = announcement.files.filter((file) => file !== document);
        }
      }
    } catch (error) {
      throw new HttpException(
        'Failed to clear the documents. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return await this.announcementRepo.save(announcement);
  }

  async clearAnnouncementFiles(announcementId: string) {
    const announcement = await this.announcementRepo.findOneByOrFail({ announcementId });

    try {
      for (const document of announcement.files) {
        await this.fileService.deleteFile(document);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to clear the documents. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    announcement.files = [];

    return await this.announcementRepo.save(announcement);
  }

  private toDocumentNames(documents: Express.Multer.File[]) {
    const documentNames: string[] = [];
    documents.forEach((document) => documentNames.push(document.originalname));
    return documentNames;
  }

  private async toDocuments(documentNames: string[]) {
    const documents = [];
    for (const documentName of documentNames) {
      documents.push((await this.fileService.getSignedLink(documentName, 600)).url);
    }
    return documents;
  }

  private getSortingConditions(
    sortBy: AnnouncementSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    type Last = 'LAST' | 'first' | 'last' | 'FIRST';

    switch (sortBy) {
      case AnnouncementSortOptions.CREATED_AT:
        return {
          createdAt: {
            nulls: 'LAST' as Last,
            direction: sortOrder,
          },
        };
      case AnnouncementSortOptions.SHOW_FROM:
        console.log(sortOrder);
        return {
          showFrom: {
            direction: sortOrder,
            nulls: 'LAST' as Last,
          },
        };
      case AnnouncementSortOptions.SHOW_TO:
        return {
          showTo: {
            direction: sortOrder,
            nulls: 'LAST' as Last,
          },
        };
      default:
        return undefined;
    }
  }
}
