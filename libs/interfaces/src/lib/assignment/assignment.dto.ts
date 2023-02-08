import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateAssignmentRequest, IUpdateAssignmentRequest } from './assignment.interface';

export class CreateAssignmentRequest implements ICreateAssignmentRequest {
  @ApiModelProperty({ example: '101' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  task?: string;

  @ApiModelProperty({ example: 'Room move' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: 'Reception' })
  @IsNotEmpty()
  requestedBy!: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  performedBy?: string;

  @ApiModelProperty({ example: new Date() })
  @IsNotEmpty()
  @IsDateString()
  requestedAt!: Date;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;
}

export class UpdateAssignmentRequest implements IUpdateAssignmentRequest {
  @ApiModelProperty({ example: '101' })
  @IsOptional()
  room?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  task?: string;

  @ApiModelProperty({ example: 'Room move' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: 'Reception' })
  @IsOptional()
  requestedBy?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  performedBy?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  requestedAt?: Date;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;
}
