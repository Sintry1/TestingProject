import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blacklist } from '@omnihost/models';
import { BlacklistController } from './blacklist.controller';
import { BlacklistService } from './blacklist.service';

@Module({
  imports: [TypeOrmModule.forFeature([Blacklist])],
  providers: [BlacklistService],
  controllers: [BlacklistController],
  exports: [BlacklistService],
})
export class BlacklistModule {}
