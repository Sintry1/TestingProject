import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILuggage, LuggageType } from '@omnihost/interfaces';
import { Luggage } from '@omnihost/models';
import * as fs from 'fs';
import * as path from 'path';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { bellBoyInitials, rooms } from '../constants/dropdown-options';
import {
  bags,
  luggageComments,
  luggageLongtermLocation,
  luggageCheckInCheckOutLocation,
} from '../constants/luggages.constants';
import { names } from '../constants/names.constant';
import {
  getRandom,
  getRandomBoolean,
  getRandomChance,
  getRandomInt,
  uploadFileToLinode,
} from './utils.service';

@Injectable()
export class LuggagesSeederService {
  uploadedFileName = 'bd53de32-f76e-4b5d-8204-cc7edbfa3946luggage.jpg';

  constructor(
    @InjectRepository(Luggage)
    private readonly repo: Repository<Luggage>
  ) {}

  create(): Array<Promise<Luggage>> {
    // The file that will be uploaded to Linode
    const fileBuffer = fs.readFileSync(path.join(__dirname, '/assets/stock-luggage.jpg'));
    uploadFileToLinode(fileBuffer, this.uploadedFileName);

    return this.generate().map(async (luggage: ILuggage) => {
      try {
        return await this.repo.save(luggage);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  generate() {
    // Control variables
    const entriesPerDay = 10;
    const longTermEntriesPerDay = 2;
    const entriesPerDayRandomFactor = 2; // random +/- value for entires

    // Setup the dates for the period of data generation
    const startDate = new Date(Date.now());
    startDate.setMonth(startDate.getMonth() - 6); // day six months in the past
    const endDate = new Date(Date.now());
    endDate.setMonth(endDate.getMonth() + 2); // day 2 months in the future
    const currentDate = new Date(Date.now());

    // Generate the data
    const data: ILuggage[] = [];
    for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
      [LuggageType.CHECKIN, LuggageType.CHECKOUT, LuggageType.LONG_TERM].forEach((luggageType) => {
        const entiresMultiplier = getRandomBoolean() ? -1 : 1;
        let entries = 0;
        if (luggageType === LuggageType.LONG_TERM) {
          entries =
            longTermEntriesPerDay + getRandomInt(0, entriesPerDayRandomFactor) * entiresMultiplier;
        } else {
          entries = entriesPerDay + getRandomInt(0, entriesPerDayRandomFactor) * entiresMultiplier;
        }
        for (let i = 0; i < entries; i++) {
          const roomReady =
            day.getDate() < currentDate.getDate() ? getRandomChance(0.999) : getRandomChance(0.4); // Old entires have 1% chance of not being completed, everything newer than current date has 10% chance
          const morningDate = new Date(day.setHours(getRandomInt(6, 12), getRandomInt(0, 60)));
          const eveningDate = new Date(day.setHours(getRandomInt(14, 16), getRandomInt(0, 60)));
          const luggageId = uuidv4();
          data.push({
            luggageId,
            luggageType: luggageType,
            room: getRandom(rooms),
            name: getRandom(names),
            bags: getRandom(bags),
            tagNr: getRandomInt(1000, 4000).toString(),
            location:
              luggageType === 'longTerm'
                ? getRandom(luggageLongtermLocation)
                : getRandom(luggageCheckInCheckOutLocation),
            comments: getRandomChance(0.4) ? getRandom(luggageComments) : null,
            roomReady: roomReady,
            createdAt: morningDate,
            arrivalTime: morningDate,
            dateNeeded: eveningDate,
            bbLr: getRandom(bellBoyInitials), // who put it in luggage room
            bbOut: roomReady ? getRandom(bellBoyInitials) : null, // who put it in the quest's room or gave it to the guest
            bbDown: roomReady ? getRandom(bellBoyInitials) : null, // who brought the luggage from luggage room from the guest's room
            completedAt: roomReady ? eveningDate : null,
            files: getRandomChance(0.2) ? [this.uploadedFileName] : [],
          });
        }
      });
    }

    return data;
  }
}
