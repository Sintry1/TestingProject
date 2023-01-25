import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateCarRequest, IUpdateCarRequest } from './car.interface';

export class CreateCarRequest implements ICreateCarRequest {
  @ApiModelProperty({ example: '2345' })
  @IsNotEmpty()
  tagNr!: string;

  @ApiModelProperty({ example: '211' })
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

  @ApiModelProperty({ example: 'Madsen' })
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

  @ApiModelProperty({ example: 'FV' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'FV' })
  @IsOptional()
  bbUp?: string;

  @ApiModelProperty({ example: 'Front' })
  @IsNotEmpty()
  location!: string;

  @ApiModelProperty({ example: 'c102' })
  @IsOptional()
  parkingLot?: string;

  @ApiModelProperty({ example: 'FV' })
  @IsOptional()
  bbOut?: string;

  @ApiModelProperty({ example: 'luxurious car' })
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
  @ApiModelProperty({ example: '2345' })
  @IsOptional()
  tagNr?: string;

  @ApiModelProperty({ example: '211' })
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

  @ApiModelProperty({ example: 'Madsen' })
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

  @ApiModelProperty({ example: 'FV' })
  @IsOptional()
  bbDown?: string;

  @ApiModelProperty({ example: 'FV' })
  @IsOptional()
  bbUp?: string;

  @ApiModelProperty({ example: 'Front' })
  @IsOptional()
  location?: string;

  @ApiModelProperty({ example: 'c102' })
  @IsOptional()
  parkingLot?: string;

  @ApiModelProperty({ example: 'FV' })
  @IsOptional()
  bbOut?: string;

  @ApiModelProperty({ example: 'luxurious car' })
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
