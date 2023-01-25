import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IDocument } from '@omnihost/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity('documents')
export class Document extends Base implements IDocument {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  documentId!: string;

  @ApiModelProperty({ example: 'New Years Eve preparations' })
  @Column()
  title!: string;

  @ApiModelProperty({ example: 'December 29th - January 2nd' })
  @Column({ nullable: true })
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @Column({ nullable: true })
  lastViewedAt?: Date;

  @ApiModelProperty({ example: true, default: false })
  @Column()
  showOnDashboard!: boolean;

  @ApiModelProperty({ example: 'new-years-eve.pdf' })
  @Column()
  documentName!: string;
}
