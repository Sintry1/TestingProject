import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICar } from '@omnihost/interfaces';
import { Car } from '@omnihost/models';
import { Repository } from 'typeorm';
import { cars } from '../constants/cars.constant';

@Injectable()
export class CarsSeederService {
  constructor(
    @InjectRepository(Car)
    private readonly repo: Repository<Car>
  ) {}

  create(): Array<Promise<Car>> {
    return cars.map(async (car: ICar) => {
      try {
        return await this.repo.save(car);
      } catch (error) {
        throw new Error(error);
      }
    });
  }
}
