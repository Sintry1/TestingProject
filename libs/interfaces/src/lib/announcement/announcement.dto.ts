import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsOptional } from 'class-validator';
import { BaseResponse } from '../base.dto';
import {
  IAnnouncement,
  IAnnouncementRequest,
  IGetAnnouncementByIdResponse,
} from './announcement.interface';

export class AnnouncementRequest implements IAnnouncementRequest {
  @ApiModelProperty({ example: 'Tour de France' })
  @IsOptional()
  title?: string;

  @ApiModelProperty({ example: "Tour de France is so cool, yo. Please don't miss it." })
  @IsOptional()
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  showTo?: Date | null;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  showFrom?: Date | null;

  @ApiModelProperty({ type: 'array', items: { type: 'string', format: 'binary' }, required: true })
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files?: any;
}

export class DeleteAnnouncementResponse {
  @ApiModelProperty({ example: 'Deleted.' })
  message = 'Deleted.';
}

export class GetAnnouncementResponse extends BaseResponse implements IAnnouncement {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  announcementId!: string;

  @ApiModelProperty({ example: 'Tour de France' })
  title!: string;

  @ApiModelProperty({ example: "Tour de France is so cool, yo. Please don't miss it." })
  comments!: string;

  @ApiModelProperty({ example: new Date() })
  showTo!: Date | null;

  @ApiModelProperty({ example: new Date() })
  showFrom!: Date | null;

  @ApiModelProperty({ example: ['tourDeFrance.pdf', 'selfieFromParis.png'] })
  files!: string[];
}

export class GetAnnouncementByIdResponse
  extends GetAnnouncementResponse
  implements IGetAnnouncementByIdResponse
{
  @ApiModelProperty({
    example: [
      'https://eu-central-1.linodeobjects.com:443/omnihost/21234.pdf?Signature=XEiYEET1C4T3I25s0I5K1IOH%2Co%3X&Expires=1670271241&AWSAccessKeyId=123456789EAEA',
    ],
  })
  downloadUrls!: string[];
}
