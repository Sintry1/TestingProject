import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateLuggageRequest, IUpdateLuggageRequest } from './luggage.interface';
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
}
