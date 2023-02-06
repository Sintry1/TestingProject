import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { CompletedAtResponse } from '../base.dto';
import {
  ICreateLuggageRequest,
  IGetLuggageByIdResponse,
  ILuggage,
  IUpdateLuggageRequest,
} from './luggage.interface';
import { LuggageType } from './luggageType.enum';

export class CreateLuggageRequest implements ICreateLuggageRequest {
  @ApiModelProperty({ example: LuggageType.CHECKIN })
  @IsNotEmpty()
  @IsEnum(LuggageType)
  luggageType!: LuggageType;

  @ApiModelProperty({ example: true })
  @IsOptional()
  roomReady?: boolean;

  @ApiModelProperty({ example: '101' })
  @IsNotEmpty()
  room!: string;

  @ApiModelProperty({ example: 'EA' })
  @IsNotEmpty()
  name!: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  arrivalTime?: Date;

  @ApiModelProperty({ example: '3+2' })
  @IsNotEmpty()
  bags!: string;

  @ApiModelProperty({ example: 'Bikes, Ski Equipment' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: '1234' })
  @IsNotEmpty()
  tagNr!: string;

  @ApiModelProperty({ example: 'LR1' })
  @IsNotEmpty()
  location!: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsNotEmpty()
  bbLr!: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  bbOut?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  dateNeeded?: Date;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;

  @ApiModelProperty({ type: 'array', items: { type: 'string', format: 'binary' }, required: true })
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files?: any = [];
}

export class UpdateLuggageRequest implements IUpdateLuggageRequest {
  @ApiModelProperty({ example: LuggageType.CHECKIN })
  @IsOptional()
  @IsEnum(LuggageType)
  luggageType?: LuggageType;

  @ApiModelProperty({ example: true })
  @IsOptional()
  roomReady?: boolean;

  @ApiModelProperty({ example: '101' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  name?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  arrivalTime?: Date;

  @ApiModelProperty({ example: '3+2' })
  @IsOptional()
  bags?: string;

  @ApiModelProperty({ example: 'Bikes, Ski Equipment' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: '1234' })
  @IsOptional()
  tagNr?: string;

  @ApiModelProperty({ example: 'LR1' })
  @IsOptional()
  location?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  bbLr?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  bbOut?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  dateNeeded?: Date;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;

  @ApiModelProperty({ type: 'array', items: { type: 'string', format: 'binary' }, required: true })
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files?: any = [];
}

export class DeleteLuggageResponse {
  @ApiModelProperty({ example: 'Deleted.' })
  message = 'Deleted.';
}

export class GetLuggageResponse extends CompletedAtResponse implements ILuggage {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  luggageId!: string;

  @ApiModelProperty({ example: LuggageType.CHECKIN })
  luggageType!: LuggageType;

  @ApiModelProperty({ example: true })
  roomReady?: boolean;

  @ApiModelProperty({ example: '101' })
  room!: string;

  @ApiModelProperty({ example: 'EA' })
  name!: string;

  @ApiModelProperty({ example: new Date() })
  @IsDateString()
  arrivalTime?: Date;

  @ApiModelProperty({ example: '3+2' })
  bags!: string;

  @ApiModelProperty({ example: 'Bikes, Ski Equipment' })
  comments?: string;

  @ApiModelProperty({ example: '1234' })
  tagNr!: string;

  @ApiModelProperty({ example: 'LR1' })
  location!: string;

  @ApiModelProperty({ example: 'EA' })
  bbDown?: string;

  @ApiModelProperty({ example: 'EA' })
  bbLr!: string;

  @ApiModelProperty({ example: 'EA' })
  bbOut?: string;

  @ApiModelProperty({ example: new Date() })
  @IsDateString()
  dateNeeded?: Date;

  @ApiModelProperty({ example: new Date() })
  @IsDateString()
  completedAt?: Date;

  @ApiModelProperty({ type: 'array', items: { type: 'string', format: 'binary' }, required: true })
  files!: string[];
}

export class GetLuggageByIdResponse extends GetLuggageResponse implements IGetLuggageByIdResponse {
  @ApiModelProperty({
    example: [
      'https://eu-central-1.linodeobjects.com:443/omnihost/21234.pdf?Signature=XEiYEET1C4T3I25s0I5K1IOH%2Co%3X&Expires=1670271241&AWSAccessKeyId=123456789EAEA',
    ],
  })
  downloadUrls!: string[];
}
