import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Luggage } from '@omnihost/models';
import { FilesModule } from '../files/files.module';
import { LuggagesController } from './luggages.controller';
import { LuggagesService } from './luggages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Luggage]), FilesModule],
  providers: [LuggagesService],
  controllers: [LuggagesController],
  exports: [LuggagesService],
})
export class LuggagesModule {}
