import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICar } from '@omnihost/interfaces';
import { Car } from '@omnihost/models';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { carComments, licensePlates } from '../constants/cars.constant';
import { bellBoyInitials, carLocation } from '../constants/dropdown-options';
import { names } from '../constants/names.constant';
import { getRandom, getRandomBoolean, getRandomChance, getRandomInt } from './utils.service';

@Injectable()
export class CarsSeederService {
  constructor(
    @InjectRepository(Car)
    private readonly repo: Repository<Car>
  ) {}

  create(): Array<Promise<Car>> {
    return this.generate().map(async (car: ICar) => {
      try {
        return await this.repo.save(car);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  generate() {
    // Control variables
    const entriesPerDay = 8;
    const entriesPerDayRandomFactor = 2; // random +/- value for entires

    // Setup the dates for the period of data generation
    const startDate = new Date(Date.now());
    startDate.setMonth(startDate.getMonth() - 6); // day six months in the past
    const endDate = new Date(Date.now());
    endDate.setMonth(endDate.getMonth() + 2); // day 2 months in the future

    // Generate the data
    const data: ICar[] = [];
    for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
      const entiresMultiplier = getRandomBoolean() ? -1 : 1;
      const entries =
        entriesPerDay + getRandomInt(0, entriesPerDayRandomFactor) * entiresMultiplier;
      for (let i = 0; i < entries; i++) {
        const completed = getRandomBoolean();
        const morningDate = new Date(day.setHours(getRandomInt(6, 12), getRandomInt(0, 60)));
        const eveningDate = new Date(day.setHours(getRandomInt(13, 22), getRandomInt(0, 60)));
        const expirationDate = new Date(day.setHours(getRandomInt(21, 23), getRandomInt(0, 60)));
        const parkingLocation = getRandom(carLocation);
        data.push({
          carId: uuidv4(),
          room: getRandomInt(100, 500).toString(), // TODO - replace with the rooms array once it is implemented
          tagNr: getRandomInt(1000, 4000).toString(),
          arrivalDate: morningDate,
          departureDate: eveningDate,
          name: getRandom(names),
          licensePlate: getRandom(licensePlates),
          expirationDate: expirationDate,
          pickUpTime: eveningDate,
          deliveryTime: eveningDate,
          bbDown: getRandom(bellBoyInitials), // who took it from hotel to parking
          bbUp: completed ? getRandom(bellBoyInitials) : null, // who took it from parking to hotel
          location: parkingLocation,
          parkingLot: completed ? null : getRandomInt(5, 40).toString(), // random parking lot number
          bbOut: completed ? getRandom(bellBoyInitials) : null, // who gave it to the guest
          comments: getRandomChance(0.4) ? getRandom(carComments) : null,
          charged: completed, // if the customer has been billed. All completed cars are billed
          createdAt: morningDate,
          completedAt: completed ? eveningDate : null,
        });
      }
    }

    return data;
  }
}
