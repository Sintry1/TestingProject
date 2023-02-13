import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { CompletedAtResponse } from '../base.dto';
import { ICar, ICreateCarRequest, IGetCarByIdResponse, IUpdateCarRequest } from './car.interface';

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

  @ApiModelProperty({ type: 'array', items: { type: 'string', format: 'binary' }, required: true })
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files?: any;
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

  @ApiModelProperty({ type: 'array', items: { type: 'string', format: 'binary' }, required: true })
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files?: any;
}

export class DeleteCarResponse {
  @ApiModelProperty({ example: 'Deleted.' })
  message = 'Deleted.';
}

export class GetCarResponse extends CompletedAtResponse implements ICar {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  carId!: string;

  @ApiModelProperty({ example: '1234' })
  tagNr!: string;

  @ApiModelProperty({ example: '101' })
  room!: string;

  @ApiModelProperty({ example: new Date() })
  arrivalDate!: Date;

  @ApiModelProperty({ example: new Date() })
  departureDate!: Date;

  @ApiModelProperty({ example: 'Larsen' })
  name!: string;

  @ApiModelProperty({ example: 'AB60789' })
  licensePlate!: string;

  @ApiModelProperty({ example: new Date() })
  expirationDate?: Date;

  @ApiModelProperty({ example: new Date() })
  pickUpTime?: Date;

  @ApiModelProperty({ example: new Date() })
  deliveryTime?: Date;

  @ApiModelProperty({ example: 'EA' })
  bbDown?: string;

  @ApiModelProperty({ example: 'EA' })
  bbUp?: string;

  @ApiModelProperty({ example: 'Front' })
  location!: string;

  @ApiModelProperty({ example: '10' })
  parkingLot?: string;

  @ApiModelProperty({ example: 'EA' })
  bbOut?: string;

  @ApiModelProperty({ example: 'LUX - 2 bellmen required' })
  comments?: string;

  @ApiModelProperty({ example: true })
  charged!: boolean;

  @ApiModelProperty({ example: ['ford_gt.pdf', 'the-flintstones-car.png'] })
  files!: string[];
}

export class GetCarByIdResponse extends GetCarResponse implements IGetCarByIdResponse {
  @ApiModelProperty({
    example: [
      'https://eu-central-1.linodeobjects.com:443/omnihost/21234.pdf?Signature=XEiYEET1C4T3I25s0I5K1IOH%2Co%3X&Expires=1670271241&AWSAccessKeyId=123456789EAEA',
    ],
  })
  downloadUrls!: string[];
}
