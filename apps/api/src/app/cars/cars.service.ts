import { BadRequestException, HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CarSortOptions,
  CreateCarRequest,
  SortOrder,
  UpdateCarRequest,
} from '@omnihost/interfaces';
import { Car } from '@omnihost/models';
import 'multer';
import { ILike, LessThanOrEqual, Repository } from 'typeorm';
import { FilesService } from '../files/files.service';
import { filterStatus } from '../utils/query-params.utils';

const FILE_MAX_SIZE = 25000000;

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepo: Repository<Car>,
    private readonly fileService: FilesService
  ) {}

  async findAllBeforeCreatedAt(
    createdAt: Date,
    status: boolean | undefined,
    search: string | undefined,
    sortBy: CarSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    const baseConditions = {
      createdAt: LessThanOrEqual<Date>(new Date(createdAt.setUTCHours(23, 59, 59, 999))),
      completedAt: filterStatus(status),
    };

    const searchCondition = search ? ILike(`%${search}%`) : undefined;

    return this.carRepo.find({
      where: [
        { ...baseConditions, bbDown: searchCondition },
        { ...baseConditions, bbUp: searchCondition },
        { ...baseConditions, bbOut: searchCondition },
        { ...baseConditions, name: searchCondition },
        {
          ...baseConditions,
          licensePlate: searchCondition,
        },
        { ...baseConditions, room: searchCondition },
      ],
      order: this.getSortingConditions(sortBy, sortOrder),
    });
  }

  async findById(carId: string) {
    return await this.carRepo.findOneByOrFail({ carId });
  }

  async createCar(carData: CreateCarRequest, files: Express.Multer.File[]) {
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

    return await this.carRepo.save({ ...carData, files: this.toFileNames(files) });
  }

  async updateCar(carId: string, carData: UpdateCarRequest, files: Express.Multer.File[]) {
    let car: Car;
    if (files.length !== 0) {
      const result = await this.updateCarFiles(carId, files);
      if (result instanceof BadRequestException) {
        return result;
      } else {
        car = result;
      }
    } else {
      car = await this.carRepo.findOneByOrFail({ carId });
    }

    for (const key in carData) {
      if (Object.prototype.hasOwnProperty.call(carData, key)) {
        car[key] = carData[key];
      }
    }

    return await this.carRepo.save(car);
  }

  async updateCarFiles(carId: string, files: Express.Multer.File[]) {
    const car = await this.carRepo.findOneByOrFail({ carId });
    if (car.files.length + files.length > 20) {
      return new BadRequestException(
        `File size limit surpassed. A car can have a maximum of 20 files. It currently has ${car.files.length}`
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

    car.files.push(...this.toFileNames(files));

    return await this.carRepo.save(car);
  }

  async removeCarFiles(carId: string, fileNames: string[]) {
    const car = await this.carRepo.findOneByOrFail({ carId });

    try {
      for (const file of car.files) {
        if (fileNames.includes(file)) {
          await this.fileService.deleteFile(file);
          car.files = car.files.filter((fileName) => fileName !== file);
        }
      }
    } catch (error) {
      throw new HttpException(
        'Failed to clear the files. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return await this.carRepo.save(car);
  }

  async clearCarFiles(carId: string) {
    const car = await this.carRepo.findOneByOrFail({ carId });

    try {
      for (const file of car.files) {
        await this.fileService.deleteFile(file);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to clear the files. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    car.files = [];

    return await this.carRepo.save(car);
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
    sortBy: CarSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    switch (sortBy) {
      case CarSortOptions.DELIVERY_TIME:
        return { deliveryTime: sortOrder };
      case CarSortOptions.EXPIRATION_DATE:
        return { expirationDate: sortOrder };
      case CarSortOptions.PICKUP_TIME:
        return { pickUpTime: sortOrder };
      case CarSortOptions.CREATED_AT:
        return { createdAt: sortOrder };
      default:
        return undefined;
    }
  }
}
