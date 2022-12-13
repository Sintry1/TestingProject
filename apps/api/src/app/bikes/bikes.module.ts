import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bike } from '@omnihost/models';
import { BikesController } from './bikes.controller';
import { BikesService } from './bikes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  providers: [BikesService],
  controllers: [BikesController],
  exports: [BikesService],
})
export class BikeModule {}
