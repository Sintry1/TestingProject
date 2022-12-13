import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IBike } from '@omnihost/interfaces';
import { Bike } from '@omnihost/models';
import { Repository } from 'typeorm';
import { bikes } from '../constants/bikes.constant';

@Injectable()
export class BikesSeederService {
  constructor(
    @InjectRepository(Bike)
    private readonly repo: Repository<Bike>
  ) {}

  create(): Array<Promise<Bike>> {
    return bikes.map(async (bike: IBike) => {
      try {
        return await this.repo.save(bike);
      } catch (error) {
        throw new Error(error);
      }
    });
  }
}
