import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IBike } from '@omnihost/interfaces';
import { Bike } from '@omnihost/models';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { bikeComments, bikeReservedBy } from '../constants/bikes.constant';
import { bellBoyInitials, rooms } from '../constants/dropdown-options';
import { names } from '../constants/names.constant';
import { getRandom, getRandomBoolean, getRandomChance, getRandomInt } from './utils.service';

@Injectable()
export class BikesSeederService {
  constructor(
    @InjectRepository(Bike)
    private readonly repo: Repository<Bike>
  ) {}

  create(): Array<Promise<Bike>> {
    return this.generate().map(async (bike: IBike) => {
      try {
        return await this.repo.save(bike);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  generate() {
    // Control variables
    const entriesPerDay = 3;
    const entriesPerDayRandomFactor = 1; // random +/- value for entires

    // Setup the dates for the period of data generation
    const startDate = new Date(Date.now());
    startDate.setMonth(startDate.getMonth() - 6); // day six months in the past
    const endDate = new Date(Date.now());
    endDate.setMonth(endDate.getMonth() + 2); // day 2 months in the future

    const minutesTimes = [0, 15, 30, 45]

    // Generate the data
    const data: IBike[] = [];
    for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
      const entiresMultiplier = getRandomBoolean() ? -1 : 1;
      const entries =
        entriesPerDay + getRandomInt(0, entriesPerDayRandomFactor) * entiresMultiplier;
      for (let i = 0; i < entries; i++) {
        const completed = getRandomBoolean();
        const morningDate = new Date(day.setHours(getRandomInt(8, 12), minutesTimes[getRandomInt(0, 3)]));
        const eveningDate = new Date(day.setHours(getRandomInt(13, 22), minutesTimes[getRandomInt(0, 3)]));
        data.push({
          bikeId: uuidv4(),
          nrOfBikes: getRandomInt(1, 3).toString(),
          pickUpTime: morningDate,
          name: getRandom(names),
          room: getRandom(rooms),
          reservedBy: getRandom(bikeReservedBy),
          bikeFormCompleted: completed,
          comments: getRandomChance(0.2) ? getRandom(bikeComments) : null,
          bbOut: getRandom(bellBoyInitials),
          bbIn: completed ? getRandom(bellBoyInitials) : null,
          timeOut: morningDate,
          timeIn: completed ? eveningDate : null,
          createdAt: morningDate,
          completedAt: completed ? eveningDate : null,
        });
      }
    }

    return data;
  }
}
