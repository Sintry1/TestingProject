import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BikeSortOptions,
  CreateBikeRequest,
  SortOrder,
  UpdateBikeRequest,
} from '@omnihost/interfaces';
import { Bike } from '@omnihost/models';
import { Between, ILike, IsNull, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike)
    private readonly bikeRepo: Repository<Bike>
  ) {}

  async findAll(from: Date | undefined, to: Date | undefined) {
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

    return this.bikeRepo.find({ where: range, order: { createdAt: 'ASC' } });
  }

  async findAllByCreatedAt(
    createdAt: Date,
    status: boolean | undefined,
    search: string | undefined,
    sortBy: BikeSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    const baseConditions = {
      completedAt: Between<Date>(
        new Date(createdAt.setUTCHours(0, 0, 0, 0)),
        new Date(createdAt.setUTCHours(23, 59, 59, 999))
      ),
    };

    const searchCondition = search ? ILike(`%${search}%`) : undefined;

    return this.bikeRepo.find({
      where: [
        { ...baseConditions, name: searchCondition },
        { ...baseConditions, reservedBy: searchCondition },
        { ...baseConditions, room: searchCondition },
        { completedAt: IsNull(), name: searchCondition },
        { completedAt: IsNull(), reservedBy: searchCondition },
        { completedAt: IsNull(), room: searchCondition },
      ],
      order: this.getSortingConditions(sortBy, sortOrder),
    });
  }

  async createBike(bikeData: CreateBikeRequest) {
    return await this.bikeRepo.save(bikeData);
  }

  async updateBike(bikeId: string, bikeData: UpdateBikeRequest) {
    const bike = await this.bikeRepo.findOneByOrFail({ bikeId });

    for (const key in bikeData) {
      if (Object.prototype.hasOwnProperty.call(bikeData, key)) {
        bike[key] = bikeData[key];
      }
    }

    return await this.bikeRepo.save(bike);
  }

  private getSortingConditions(
    sortBy: BikeSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    switch (sortBy) {
      case BikeSortOptions.BIKE_FORM_COMPLETED:
        return { bikeFormCompleted: sortOrder };
      case BikeSortOptions.COMPLETED_AT:
        return { completedAt: sortOrder };
      case BikeSortOptions.PICKUP_TIME:
        return { pickUpTime: sortOrder };
      case BikeSortOptions.CREATED_AT:
        return { createdAt: sortOrder };
      case BikeSortOptions.NAME:
        return { name: sortOrder };
      case BikeSortOptions.RESERVED_BY:
        return { reservedBy: sortOrder };
      case BikeSortOptions.ROOM:
        return { room: sortOrder };
      default:
        return undefined;
    }
  }
}
