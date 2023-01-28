import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IAnnouncement } from '@omnihost/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity('announcements')
export class Announcement extends Base implements IAnnouncement {
  @ApiModelProperty({ example: '80a0d2ac-ec67-482e-9017-909b72a74be7' })
  @PrimaryGeneratedColumn('uuid')
  announcementId!: string;

  @ApiModelProperty({ example: 'Tour de France' })
  @Column({ nullable: true })
  title?: string;

  @ApiModelProperty({ example: "Tour de France is so cool, yo. Please don't miss it." })
  @Column({ nullable: true })
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @Column({ nullable: true })
  showTo?: Date | null;

  @ApiModelProperty({ example: new Date() })
  @Column({ nullable: true })
  showFrom?: Date | null;

  @ApiModelProperty({ example: ['tourDeFrance.pdf', 'selfieFromParis.png'] })
  @Column("text", { array: true, default: [] })
  files!: string[];
}
