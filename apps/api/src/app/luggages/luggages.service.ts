import { BadRequestException, HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateLuggageRequest,
  LuggageSortOptions,
  LuggageType,
  SortOrder,
  UpdateLuggageRequest,
} from '@omnihost/interfaces';
import { Luggage } from '@omnihost/models';
import 'multer';
import { Between, ILike, IsNull, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { FilesService } from '../files/files.service';
import { filterStatus } from '../utils/query-params.utils';

const FILE_MAX_SIZE = 10000000;

@Injectable()
export class LuggagesService {
  constructor(
    @InjectRepository(Luggage)
    private readonly luggageRepo: Repository<Luggage>,
    private readonly fileService: FilesService
  ) {}

  async findAll(from: Date | undefined, to: Date | undefined, luggageType: LuggageType) {
    let range = undefined;
    if (from && to) {
      range = {
        createdAt: Between<Date>(
          new Date(from.setUTCHours(0, 0, 0, 0)),
          new Date(to.setUTCHours(23, 59, 59, 999))
        ),
      };
    } else if (from) {
      range = { createdAt: MoreThanOrEqual<Date>(new Date(from.setUTCHours(0, 0, 0, 0))) };
    } else if (to) {
      range = { createdAt: LessThanOrEqual<Date>(new Date(to.setUTCHours(23, 59, 59, 999))) };
    }

    return this.luggageRepo.find({ where: { luggageType, ...range }, order: { createdAt: 'ASC' } });
  }

  async findAllByLuggageTypeAndCreatedAt(
    luggageType: LuggageType,
    createdAt: Date,
    status: boolean | undefined,
    location: string | undefined,
    search: string | undefined,
    sortBy: LuggageSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    const baseConditions = {
      luggageType,
      createdAt: Between<Date>(
        new Date(createdAt.setUTCHours(0, 0, 0, 0)),
        new Date(createdAt.setUTCHours(23, 59, 59, 999))
      ),
      completedAt: filterStatus(status),
    };
    const baseConditionsLongTermCompleted = {
      luggageType: LuggageType.LONG_TERM,
      completedAt:
        Between<Date>(
          new Date(createdAt.setUTCHours(0, 0, 0, 0)),
          new Date(createdAt.setUTCHours(23, 59, 59, 999))
        ) || IsNull(),
      location,
    };
    const baseConditionsLongTermExtraIncomplete = {
      luggageType: LuggageType.LONG_TERM,
      completedAt: IsNull(),
      location,
    };

    const searchCondition = search ? ILike(`%${search}%`) : undefined;

    return await this.luggageRepo.find({
      where:
        luggageType === LuggageType.LONG_TERM
          ? // Long term Query
            [
              { ...baseConditionsLongTermCompleted, bbDown: searchCondition },
              { ...baseConditionsLongTermCompleted, bbLr: searchCondition },
              { ...baseConditionsLongTermCompleted, bbOut: searchCondition },
              { ...baseConditionsLongTermCompleted, room: searchCondition },
              { ...baseConditionsLongTermCompleted, name: searchCondition },

              { ...baseConditionsLongTermExtraIncomplete, bbDown: searchCondition },
              { ...baseConditionsLongTermExtraIncomplete, bbLr: searchCondition },
              { ...baseConditionsLongTermExtraIncomplete, bbOut: searchCondition },
              { ...baseConditionsLongTermExtraIncomplete, room: searchCondition },
              { ...baseConditionsLongTermExtraIncomplete, name: searchCondition },
            ]
          : // Checkin or Checkout Query
            [
              { ...baseConditions, bbDown: searchCondition },
              { ...baseConditions, bbLr: searchCondition },
              { ...baseConditions, bbOut: searchCondition },
              { ...baseConditions, room: searchCondition },
              { ...baseConditions, name: searchCondition },
            ],
      order: this.getSortingConditions(sortBy, sortOrder),
    });
  }

  async findById(luggageId: string) {
    return await this.luggageRepo.findOneByOrFail({ luggageId });
  }

  async createLuggage(luggageData: CreateLuggageRequest, files: Express.Multer.File[]) {
    try {
      const promises: Promise<{ url: string }>[] = [];
      for (const file of files) {
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
    if (
      (luggageData.luggageType === LuggageType.CHECKIN ||
        luggageData.luggageType === LuggageType.CHECKOUT) &&
      !luggageData.room
    ) {
      throw new HttpException('Room must have a value.', HttpStatus.BAD_REQUEST);
    }
    return await this.luggageRepo.save({ ...luggageData, files: this.toFileNames(files) });
  }

  async updateLuggage(
    luggageId: string,
    luggageData: UpdateLuggageRequest,
    files: Express.Multer.File[]
  ) {
    let luggage: Luggage;
    if (files.length !== 0) {
      const result = await this.updateLuggageFiles(luggageId, files);
      if (result instanceof BadRequestException) {
        return result;
      } else {
        luggage = result;
      }
    } else {
      luggage = await this.luggageRepo.findOneByOrFail({ luggageId });
    }

    for (const key in luggageData) {
      if (Object.prototype.hasOwnProperty.call(luggageData, key)) {
        luggage[key] = luggageData[key];
      }
    }

    return await this.luggageRepo.save(luggage);
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

  async updateLuggageFiles(luggageId: string, files: Express.Multer.File[]) {
    const luggage = await this.luggageRepo.findOneByOrFail({ luggageId });
    if (luggage.files.length + files.length > 20) {
      return new BadRequestException(
        `File size limit surpassed. A luggage can have a maximum of 20 files. It currently has ${luggage.files.length}`
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

    luggage.files.push(...this.toFileNames(files));

    return await this.luggageRepo.save(luggage);
  }
  async removeLuggageFiles(luggageId: string, fileNames: string[]) {
    const luggage = await this.luggageRepo.findOneByOrFail({ luggageId });

    try {
      for (const file of luggage.files) {
        if (fileNames.includes(file)) {
          await this.fileService.deleteFile(file);
          luggage.files = luggage.files.filter((fileName) => fileName !== file);
        }
      }
    } catch (error) {
      throw new HttpException(
        'Failed to clear the files. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    return await this.luggageRepo.save(luggage);
  }

  async clearLuggageFiles(luggageId: string) {
    const luggage = await this.luggageRepo.findOneByOrFail({ luggageId });

    try {
      for (const file of luggage.files) {
        await this.fileService.deleteFile(file);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to clear the files. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    luggage.files = [];

    return await this.luggageRepo.save(luggage);
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
    sortBy: LuggageSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    switch (sortBy) {
      case LuggageSortOptions.ARRIVAL_TIME:
        return { arrivalTime: sortOrder };
      case LuggageSortOptions.DATE_NEEDED:
        return { dateNeeded: sortOrder };
      case LuggageSortOptions.COMPLETED_AT:
        return { completedAt: sortOrder };
      case LuggageSortOptions.CREATED_AT:
        return { createdAt: sortOrder };
      case LuggageSortOptions.NAME:
        return { name: sortOrder };
      case LuggageSortOptions.ROOM:
        return { room: sortOrder };
      default:
        return undefined;
    }
  }
}
