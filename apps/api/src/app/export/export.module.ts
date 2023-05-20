import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assignment, Bike, Car, Luggage } from '@omnihost/models';
import { MailModule } from '../mail/mail.module';
import { ExportController } from './export.controller';
import { ExportService } from './export.service';

@Module({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imports: [TypeOrmModule.forFeature([Luggage, Car, Bike, Assignment]), MailModule],
  controllers: [ExportController],
  providers: [ExportService],
})
export class ExportModule {}
