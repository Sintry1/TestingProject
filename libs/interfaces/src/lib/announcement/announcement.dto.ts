import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsOptional } from 'class-validator';
import { IAnnouncementRequest } from './announcement.interface';

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

  @ApiModelProperty({ example: ['tourDeFrance.pdf', 'selfieFromParis.png'] })
  @IsOptional()
  files?: string[];
}
