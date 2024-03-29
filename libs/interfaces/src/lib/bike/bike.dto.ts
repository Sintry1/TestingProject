import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsOptional } from 'class-validator';
import { ICreateBikeRequest, IUpdateBikeRequest } from './bike.interface';

export class CreateBikeRequest implements ICreateBikeRequest {
  @ApiModelProperty({ example: '1' })
  @IsOptional()
  nrOfBikes?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  pickUpTime?: Date | null;

  @ApiModelProperty({ example: 'Larsen' })
  @IsOptional()
  name?: string;

  @ApiModelProperty({ example: '101' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'Reception' })
  @IsOptional()
  reservedBy?: string;

  @ApiModelProperty({ example: true })
  @IsOptional()
  bikeFormCompleted?: boolean;

  @ApiModelProperty({ example: 'E-Bike' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date | null;
}

export class UpdateBikeRequest implements IUpdateBikeRequest {
  @ApiModelProperty({ example: '1' })
  @IsOptional()
  nrOfBikes?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  pickUpTime?: Date | null;

  @ApiModelProperty({ example: 'Larsen' })
  @IsOptional()
  name?: string;

  @ApiModelProperty({ example: '101' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'Reception' })
  @IsOptional()
  reservedBy?: string;

  @ApiModelProperty({ example: true })
  @IsOptional()
  bikeFormCompleted?: boolean;

  @ApiModelProperty({ example: 'E-Bike' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date | null;
}
