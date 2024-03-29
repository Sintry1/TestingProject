import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { CompletedAtResponse } from '../base.dto';
import {
  IBlacklist,
  ICreateBlacklistRequest,
  IGetBlacklistByIdResponse,
  IUpdateBlacklistRequest,
} from './blacklist.interface';

export class GetBlacklistResponse extends CompletedAtResponse implements IBlacklist {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  blacklistId!: string;

  @ApiModelProperty({ example: 'Dominic Smith' })
  name!: string;

  @ApiModelProperty({ example: 'Abusive to staff.' })
  comments!: string;

  @ApiModelProperty({ example: new Date() })
  expiresAt!: Date;

  @ApiModelProperty({ example: ['dominicSmith.jpg', 'customerImage.png'] })
  files!: string[];
}
export class CreateBlacklistRequest implements ICreateBlacklistRequest {
  @ApiModelProperty({ example: 'Dominic Smith' })
  @IsNotEmpty()
  name!: string;

  @ApiModelProperty({ example: 'Abusive to staff' })
  @IsNotEmpty()
  comments!: string;

  @ApiModelProperty({ example: new Date(), required: false })
  @IsDateString()
  @IsOptional()
  expiresAt?: Date;

  @ApiModelProperty({ type: 'array', items: { type: 'string', format: 'binary' }, required: true })
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files?: any;
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

  @ApiModelProperty({ type: 'array', items: { type: 'string', format: 'binary' }, required: true })
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files?: any;
}

export class DeleteBlacklistResponse {
  @ApiModelProperty({ example: 'Deleted.' })
  message = 'Deleted.';
}

export class GetBlacklistByIdResponse
  extends GetBlacklistResponse
  implements IGetBlacklistByIdResponse
{
  @ApiModelProperty({
    example:
      'https://eu-central-1.linodeobjects.com:443/omnihost/21234.pdf?Signature=XEiYEET1C4T3I25s0I5K1IOH%2Co%3X&Expires=1670271241&AWSAccessKeyId=123456789EAEA',
  })
  downloadUrls!: string[];
}
