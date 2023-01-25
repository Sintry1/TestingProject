import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateBlacklistRequest, IUpdateBlacklistRequest } from './blacklist.interface';

export class CreateBlacklistRequest implements ICreateBlacklistRequest {
  @ApiModelProperty({ example: 'Dominic Smith' })
  @IsNotEmpty()
  name!: string;

  @ApiModelProperty({ example: 'Abusive to staff' })
  @IsNotEmpty()
  comments!: string;

  @ApiModelProperty({ example: new Date() })
  @IsDateString()
  @IsOptional()
  expiresAt?: Date;

  @ApiModelProperty({ example: 'dominicSmith.jpg' })
  @IsOptional()
  files?: string[];
}

export class UpdateBlacklistRequest implements IUpdateBlacklistRequest {
  @ApiModelProperty({ example: 'Dominic Smith' })
  @IsOptional()
  name?: string;

  @ApiModelProperty({ example: 'Abusive to staff' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @IsDateString()
  @IsOptional()
  expiresAt?: Date;

  @ApiModelProperty({ example: 'dominicSmith.jpg ' })
  @IsOptional()
  files?: string[];
}
