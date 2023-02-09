import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateCarRequest, IUpdateCarRequest } from './car.interface';

export class CreateCarRequest implements ICreateCarRequest {
  @ApiModelProperty({ example: '1234' })
  @IsNotEmpty()
  tagNr!: string;

  @ApiModelProperty({ example: '101' })
  @IsNotEmpty()
  room!: string;

  @ApiModelProperty({ example: new Date() })
  @IsNotEmpty()
  @IsDateString()
  arrivalDate!: Date;

  @ApiModelProperty({ example: new Date() })
  @IsNotEmpty()
  @IsDateString()
  departureDate!: Date;

  @ApiModelProperty({ example: 'Larsen' })
  @IsNotEmpty()
  name!: string;

  @ApiModelProperty({ example: 'AB60789' })
  @IsNotEmpty()
  licensePlate!: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  expirationDate?: Date;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  pickUpTime?: Date;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  deliveryTime?: Date;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  bbUp?: string;

  @ApiModelProperty({ example: 'Front' })
  @IsNotEmpty()
  location!: string;

  @ApiModelProperty({ example: '10' })
  @IsOptional()
  parkingLot?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  bbOut?: string;

  @ApiModelProperty({ example: 'LUX - 2 bellmen required' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: true })
  @IsNotEmpty()
  charged!: boolean;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;
}

export class UpdateCarRequest implements IUpdateCarRequest {
  @ApiModelProperty({ example: '1234' })
  @IsOptional()
  tagNr?: string;

  @ApiModelProperty({ example: '101' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  arrivalDate?: Date;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  departureDate?: Date;

  @ApiModelProperty({ example: 'Larsen' })
  @IsOptional()
  name?: string;

  @ApiModelProperty({ example: 'AB60789' })
  @IsOptional()
  licensePlate?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  expirationDate?: Date;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  pickUpTime?: Date;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  deliveryTime?: Date;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  bbUp?: string;

  @ApiModelProperty({ example: 'Front' })
  @IsOptional()
  location?: string;

  @ApiModelProperty({ example: '10' })
  @IsOptional()
  parkingLot?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  bbOut?: string;

  @ApiModelProperty({ example: 'LUX - 2 bellmen required' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: true })
  @IsOptional()
  charged?: boolean;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;
}
