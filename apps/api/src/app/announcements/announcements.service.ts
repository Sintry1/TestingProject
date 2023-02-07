import { BadRequestException, HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnnouncementRequest, AnnouncementSortOptions, SortOrder } from '@omnihost/interfaces';
import { Announcement } from '@omnihost/models';
import 'multer';
import { Between, ILike, Repository } from 'typeorm';
import { FilesService } from '../files/files.service';

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

  async createAnnouncement(announcementData: AnnouncementRequest, files: Express.Multer.File[]) {
    try {
      const promises: Promise<{ url: string }>[] = [];
      for (const file of files) {
        // We are doing size validation here, and not in the file interceptor because it is only here that
        // we do have access to the `size` attribute.
        if (file.size > FILE_MAX_SIZE) {
          return new BadRequestException(`Invalid file size for file: ${file.originalname}`);
        }
        promises.push(this.fileService.uploadFile(file.buffer, file.originalname));
      }
      await Promise.all(promises);
    } catch (error) {
      throw new HttpException(
        'Failed to upload the files. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return await this.announcementRepo.save({
      ...announcementData,
      files: this.toFileNames(files),
    });
  }

  async updateAnnouncement(
    announcementId: string,
    announcementData: AnnouncementRequest,
    files: Express.Multer.File[]
  ) {
    let announcement: Announcement;
    if (files.length !== 0) {
      const result = await this.updateAnnouncementFiles(announcementId, files);
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
      for (const file of announcement.files) {
        await this.fileService.deleteFile(file);
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

  async getFilesLink(fileNames: string[]) {
    try {
      return await this.toFiles(fileNames);
    } catch (error) {
      Logger.error(error);
      throw new HttpException(
        "Failed to get the files' links. Please try again later.",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateAnnouncementFiles(announcementId: string, files: Express.Multer.File[]) {
    const announcement = await this.announcementRepo.findOneByOrFail({ announcementId });
    if (announcement.files.length + files.length > 5) {
      return new BadRequestException(
        `File size limit surpassed. An announcement can have a maximum of 5 files. It currently has ${announcement.files.length}`
      );
    }

    try {
      for (const file of files) {
        if (file.size > FILE_MAX_SIZE) {
          return new BadRequestException(`Invalid file size for file: ${file.originalname}`);
        }

        await this.fileService.uploadFile(file.buffer, file.originalname);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to upload the files. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    announcement.files.push(...this.toFileNames(files));

    return await this.announcementRepo.save(announcement);
  }

  async removeAnnouncementFiles(announcementId: string, fileNames: string[]) {
    const announcement = await this.announcementRepo.findOneByOrFail({ announcementId });

    try {
      for (const file of announcement.files) {
        if (fileNames.includes(file)) {
          await this.fileService.deleteFile(file);
          announcement.files = announcement.files.filter((fileName) => fileName !== file);
        }
      }
    } catch (error) {
      throw new HttpException(
        'Failed to clear the files. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return await this.announcementRepo.save(announcement);
  }

  async clearAnnouncementFiles(announcementId: string) {
    const announcement = await this.announcementRepo.findOneByOrFail({ announcementId });

    try {
      for (const file of announcement.files) {
        await this.fileService.deleteFile(file);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to clear the files. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    announcement.files = [];

    return await this.announcementRepo.save(announcement);
  }

  private toFileNames(files: Express.Multer.File[]) {
    const fileNames: string[] = [];
    files.forEach((file) => fileNames.push(file.originalname));
    return fileNames;
  }

  private async toFiles(fileNames: string[]) {
    const files = [];
    for (const fileName of fileNames) {
      files.push((await this.fileService.getSignedLink(fileName, 600)).url);
    }
    return files;
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
