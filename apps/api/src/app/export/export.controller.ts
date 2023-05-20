import {
  Body,
  Controller,
  HttpException,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ExportDataDto, Role } from '@omnihost/interfaces';
import { JwtAccessAuthGuard } from '../auth/jwt-auth-access.guard';
import { Roles } from '../auth/roles.decorator';
import { MailService } from '../mail/mail.service';
import { SentryService } from '../utils/sentry.service';
import { ExportService } from './export.service';

@Controller('export')
@ApiBearerAuth()
@UseGuards(JwtAccessAuthGuard)
@Roles(Role.manager)
export class ExportController {
  constructor(private readonly exportService: ExportService, private mailService: MailService) {}
  private readonly logger = new Logger(ExportController.name);

  @Post(':tableName')
  async export(@Param('tableName') tableName: string, @Body() body: ExportDataDto) {
    this.logger.log(`Exporting data for table '${tableName}'`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: any[];
    // Export the data
    try {
      data = await this.exportService.exportTableData(
        tableName,
        body.mappingParams,
        body.from,
        body.to
      );
    } catch (error) {
      SentryService.log(
        'error',
        `Failed to export data for '${tableName}' table dates from ${body.from} to ${body.to}`,
        this.logger,
        error
      );
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException(`Failed to export data for the '${tableName}' table.`);
    }

    if (data.length == 0) {
      this.logger.warn(
        `The provided data range has no data to export in the '${tableName}' table!`
      );
      throw new NotFoundException(`The provided data range has no data to export!`);
    }

    SentryService.log(
      'info',
      `Exported data for '${tableName}' table dates from ${body.from} to ${body.to}`,
      this.logger
    );

    // Send an email with the exported data
    try {
      await this.mailService.sendExportDataEmail({
        email: body.email,
        tableName: tableName,
        from: body.from,
        to: body.to,
        data,
      });
    } catch (error) {
      SentryService.log(
        'error',
        `Failed to send the exported data to the provided email`,
        this.logger,
        error
      );
      throw new InternalServerErrorException(
        `Failed to send the exported data to the provided email`
      );
    }
    return {
      message: `Exported and emailed data for '${tableName}' table dates from ${body.from} to ${body.to}`,
    };
  }
}
