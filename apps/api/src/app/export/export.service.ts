import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IExportParams, LuggageType } from '@omnihost/interfaces';
import { Assignment, Bike, Car, Luggage } from '@omnihost/models';
import { Between, Repository } from 'typeorm';

@Injectable()
export class ExportService {
  constructor(
    @InjectRepository(Luggage)
    private readonly luggageRepo: Repository<Luggage>,
    @InjectRepository(Car)
    private readonly carsRepo: Repository<Car>,
    @InjectRepository(Bike)
    private readonly bikesRepo: Repository<Bike>,
    @InjectRepository(Assignment)
    private readonly assignmentsRepo: Repository<Assignment>
  ) {}

  async exportTableData(tableName: string, mappingParams: IExportParams[], from: Date, to: Date) {
    const repo = this.getRepo(tableName);

    const dateRange = {
      createdAt: Between<Date>(
        new Date(from.setUTCHours(0, 0, 0, 0)),
        new Date(to.setUTCHours(23, 59, 59, 999))
      ),
    };

    let extraFilters = undefined;
    if (repo == this.luggageRepo) {
      switch (tableName) {
        case 'checkin':
          extraFilters = { luggageType: LuggageType.CHECKIN };
          break;
        case 'checkout':
          extraFilters = { luggageType: LuggageType.CHECKOUT };
          break;
        case 'longterm':
          extraFilters = { luggageType: LuggageType.LONG_TERM };
          break;
      }
    }

    // Fetch the data
    const data = await repo.find({
      where: { ...dateRange, ...extraFilters },
      order: { createdAt: 'DESC' },
    });

    // Filter and format the data to match the required field structure and names
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formattedData = data.map((entry: any) => {
      const result = {};
      for (const param of mappingParams) {
        if (!entry[param.fieldName]) {
          result[param.exportName] = null;
        } else if (typeof entry[param.fieldName] == 'object') {
          // the value is a date
          result[param.exportName] = entry[param.fieldName]?.toISOString();
        } else {
          result[param.exportName] = entry[param.fieldName];
        }
      }
      return result;
    });

    return formattedData;
  }

  private getRepo(tableName: string) {
    switch (tableName.toLowerCase()) {
      case 'checkin':
        return this.luggageRepo;
      case 'checkout':
        return this.luggageRepo;
      case 'longterm':
        return this.luggageRepo;
      case 'luggage': // exports all luggage types
        return this.luggageRepo;
      case 'cars':
        return this.carsRepo;
      case 'bikes':
        return this.bikesRepo;
      case 'assignments':
        return this.assignmentsRepo;
      default:
        throw new NotAcceptableException(
          `Table with name '${tableName}' does not support data exporting`
        );
    }
  }
}
