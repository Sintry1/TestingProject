import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { IExportParams } from './export.interface';

export class ExportDataDto {

  @IsEmail()
  email!: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => ExportParamDto)
  mappingParams!: ExportParamDto[];

  @IsDate()
  @Type(() => Date)
  from!: Date;

  @IsDate()
  @Type(() => Date)
  to!: Date;
}

class ExportParamDto implements IExportParams {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  fieldName!: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  exportName!: string;
}
