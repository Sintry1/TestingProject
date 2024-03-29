import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IAssignment } from '@omnihost/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompletedAt } from './base.entity';

@Entity('assignments')
export class Assignment extends CompletedAt implements IAssignment {
  @ApiModelProperty({ example: '80a0d2ac-ec67-482e-9017-909b72a74be7' })
  @PrimaryGeneratedColumn('uuid')
  assignmentId!: string;

  @ApiModelProperty({ example: '101' })
  @Column({ nullable: true })
  room?: string;

  @ApiModelProperty({ example: 'RA' })
  @Column({ nullable: true })
  task?: string;

  @ApiModelProperty({ example: 'Room move' })
  @Column({ nullable: true })
  comments?: string;

  @ApiModelProperty({ example: 'Reception' })
  @Column()
  requestedBy!: string;

  @ApiModelProperty({ example: 'EA' })
  @Column({ nullable: true })
  performedBy?: string;

  @ApiModelProperty({ example: new Date() })
  @Column()
  requestedAt!: Date;
}
