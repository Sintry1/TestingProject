import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IBlacklist } from '@omnihost/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompletedAt } from './base.entity';

@Entity('blacklist')
export class Blacklist extends CompletedAt implements IBlacklist {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  blacklistId!: string;

  @ApiModelProperty({ example: 'Dominic Smith' })
  @Column({ nullable: true })
  name?: string;

  @ApiModelProperty({ example: 'Abusive to staff' })
  @Column({ nullable: true })
  comments?: string;

  @ApiModelProperty({ example: new Date() })
  @Column({ nullable: true })
  expiresAt?: Date;

  @ApiModelProperty({ example: 'dominicSmith.jpg' })
  @Column({ type: 'jsonb', nullable: true })
  files?: File[];
}
