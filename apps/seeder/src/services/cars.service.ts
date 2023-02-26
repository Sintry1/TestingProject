import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICar } from '@omnihost/interfaces';
import { Car } from '@omnihost/models';
import * as fs from 'fs';
import * as path from 'path';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { carComments, licensePlates } from '../constants/cars.constant';
import { bellBoyInitials, carLocation, rooms } from '../constants/dropdown-options';
import { names } from '../constants/names.constant';
import {
  getRandom,
  getRandomBoolean,
  getRandomChance,
  getRandomInt,
  uploadFileToLinode,
} from './utils.service';

@Injectable()
export class CarsSeederService {
  uploadedFileName = `car.jpg`;

  constructor(
    @InjectRepository(Car)
    private readonly repo: Repository<Car>
  ) {}

  create(): Array<Promise<Car>> {
    const fileBuffer = fs.readFileSync(path.join(__dirname, '/assets/stock-car.jpg'));
    uploadFileToLinode(fileBuffer, this.uploadedFileName);

    return this.generate().map(async (car: ICar) => {
      try {
        return await this.repo.save(car);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  generate() {
    const minutesTimes = [0, 15, 30, 45];

    const data: ICar[] = [];
    for (let i = -100; i <= 0; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const thisDay = new Date(date.setHours(8));

      for (let a = 0; a < getRandomInt(5, 15); a++) {
        const carId = uuidv4();
        const arrivalDate = new Date(
          thisDay.setHours(thisDay.getHours() + 1, minutesTimes[getRandomInt(0, 3)])
        );

        const departureDate = new Date();
        departureDate.setDate(date.getDate() + getRandomInt(1, 5));
        departureDate.setHours(getRandomInt(10, 20), minutesTimes[getRandomInt(0, 3)]);

        const pickUpTime = new Date(departureDate.setHours(departureDate.getHours() - 1));
        let completed = true;

        if (i >= -1) {
          completed = Math.random() < 0.4;
        }

        data.push({
          carId,
          room: getRandom(rooms),
          tagNr: getRandomInt(1000, 4000).toString(),
          arrivalDate: arrivalDate,
          departureDate: departureDate,
          name: getRandom(names),
          licensePlate: getRandom(licensePlates),
          expirationDate: departureDate,
          pickUpTime: pickUpTime,
          deliveryTime: completed ? pickUpTime : null,
          bbDown: getRandom(bellBoyInitials),
          bbUp: completed ? getRandom(bellBoyInitials) : null,
          location: getRandom(carLocation),
          parkingLot: getRandomInt(5, 40).toString(),
          bbOut: completed ? getRandom(bellBoyInitials) : null,
          comments: getRandomChance(0.4) ? getRandom(carComments) : null,
          charged: completed ? true : Math.random() < 0.3,
          createdAt: arrivalDate,
          completedAt: completed ? departureDate : null,
          files: getRandomChance(0.5) ? [this.uploadedFileName] : [],
        });
      }
    }

    return data;
  }
}
