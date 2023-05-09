import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Transform } from 'class-transformer';
import { IsBoolean, IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { CompletedAtResponse } from '../base.dto';
import {
  ICreateDocumentRequest,
  IDocument,
  IGetDocumentByIdResponse,
  IUpdateDocumentRequest,
} from './document.interface';

export class GetDocumentResponse extends CompletedAtResponse implements IDocument {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  documentId!: string;

  @ApiModelProperty({ example: 'New Years Eve preparations' })
  title!: string;

  @ApiModelProperty({ example: 'December 29th - January 2nd' })
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  lastViewedAt?: Date;

  @ApiModelProperty({ example: true, default: false })
  showOnDashboard!: boolean;

  @ApiModelProperty({ example: 'new-years-eve.pdf' })
  documentName!: string;
}

export class CreateDocumentRequest implements ICreateDocumentRequest {
  @ApiModelProperty({ example: 'New Years Eve preparations' })
  @IsNotEmpty()
  title!: string;

  @ApiModelProperty({ example: 'December 29th - January 2nd' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  lastViewedAt?: Date;

  @ApiModelProperty({ example: true, default: false })
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  showOnDashboard!: boolean;

  @ApiModelProperty({ type: 'string', format: 'binary', required: true })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  document?: any;
}

export class UpdateDocumentRequest implements IUpdateDocumentRequest {
  @ApiModelProperty({ example: 'New Years Eve preparations' })
  @IsOptional()
  title?: string;

  @ApiModelProperty({ example: 'December 29th - January 2nd' })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  lastViewedAt?: Date;

  @ApiModelProperty({ example: true, default: false })
  @IsOptional()
  showOnDashboard?: boolean;
}

export class DeleteDocumentResponse {
  @ApiModelProperty({ example: 'Deleted.' })
  message = 'Deleted.';
}

export class GetDocumentByIdResponse
  extends GetDocumentResponse
  implements IGetDocumentByIdResponse
{
  @ApiModelProperty({
    example:
      'https://eu-central-1.linodeobjects.com:443/omnihost/21234.pdf?Signature=XEiYEET1C4T3I25s0I5K1IOH%2Co%3X&Expires=1670271241&AWSAccessKeyId=123456789EAEA',
  })
  downloadUrl!: string;
}
