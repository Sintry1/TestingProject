import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '@omnihost/models';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService],
  controllers: [CarsController],
  exports: [CarsService],
})
export class CarsModule {}
