import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILuggage, LuggageType } from '@omnihost/interfaces';
import { Luggage } from '@omnihost/models';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { bellBoyInitials, luggageLocation } from '../constants/dropdown-options';
import { bags, luggageComments } from '../constants/luggages.constants';
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
  constructor(
    @InjectRepository(Luggage)
    private readonly repo: Repository<Luggage>
  ) {}

  create(): Array<Promise<Luggage>> {
    // The file that will be uploaded to Linode
    const fileBuffer = fs.readFileSync(path.join(__dirname, '/assets/picture.jpg'));

    return this.generate().map(async (luggage: ILuggage) => {
      try {
        if (luggage.files.length !== 0) {
          await uploadFileToLinode(fileBuffer, `${luggage.files[0]}`);
        }

        return await this.repo.save(luggage);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  generate() {
    // Control variables
    const entriesPerDay = 10;
    const entriesPerDayRandomFactor = 2; // random +/- value for entires

    // Setup the dates for the period of data generation
    const startDate = new Date(Date.now());
    startDate.setMonth(startDate.getMonth() - 6); // day six months in the past
    const endDate = new Date(Date.now());
    endDate.setMonth(endDate.getMonth() + 2); // day 2 months in the future

    // Generate the data
    const data: ILuggage[] = [];
    for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
      [LuggageType.CHECKIN, LuggageType.CHECKOUT, LuggageType.LONG_TERM].forEach((luggageType) => {
        const entiresMultiplier = getRandomBoolean() ? -1 : 1;
        const entries =
          entriesPerDay + getRandomInt(0, entriesPerDayRandomFactor) * entiresMultiplier;
        for (let i = 0; i < entries; i++) {
          const roomReady =
            luggageType === LuggageType.LONG_TERM ? getRandomChance(0.9) : getRandomBoolean(); // long term storage has 10% of not being completed
          const morningDate = new Date(day.setHours(getRandomInt(6, 12), getRandomInt(0, 60)));
          const eveningDate = new Date(day.setHours(getRandomInt(13, 22), getRandomInt(0, 60)));
          const luggageId = uuidv4();
          data.push({
            luggageId,
            luggageType: luggageType,
            room: getRandomInt(100, 500).toString(), // TODO - replace with the rooms array once it is implemented
            name: getRandom(names),
            bags: getRandom(bags),
            tagNr: getRandomInt(1000, 4000).toString(),
            location: getRandom(luggageLocation),
            comments: getRandomChance(0.4) ? getRandom(luggageComments) : null,
            roomReady: roomReady,
            createdAt: morningDate,
            arrivalTime: morningDate,
            dateNeeded: eveningDate,
            bbLr: getRandom(bellBoyInitials), // who put it in luggage room
            bbOut: roomReady ? getRandom(bellBoyInitials) : null, // who put it in the quest's room or gave it to the guest
            bbDown: roomReady ? getRandom(bellBoyInitials) : null, // who brought the luggage from luggage room from the guest's room
            completedAt: roomReady ? eveningDate : null,
            files: getRandomChance(0.1) ? [`luggage.jpg`] : [],
          });
        }
      });
    }

    return data;
  }
}
