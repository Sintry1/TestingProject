import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { ILuggage, LuggageType } from '@omnihost/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompletedAt } from './base.entity';

@Entity('luggages')
export class Luggage extends CompletedAt implements ILuggage {
  @ApiModelProperty({ example: '80a0d2ac-ec67-482e-9017-909b72a74be7' })
  @PrimaryGeneratedColumn('uuid')
  luggageId!: string;

  @ApiModelProperty({ example: LuggageType.CHECKIN })
  @Column({ type: 'enum', enum: LuggageType })
  luggageType!: LuggageType;

  @ApiModelProperty({ example: true })
  @Column({ nullable: true })
  roomReady?: boolean;

  @ApiModelProperty({ example: '101' })
  @Column()
  room!: string;

  @ApiModelProperty({ example: 'Larsen' })
  @Column()
  name!: string;

  @ApiModelProperty({ example: new Date() })
  @Column({ nullable: true })
  arrivalTime?: Date;

  @ApiModelProperty({ example: '3+2' })
  @Column()
  bags!: string;

  @ApiModelProperty({ example: 'Bikes, Ski Equipment' })
  @Column({ nullable: true })
  comments?: string;

  @ApiModelProperty({ example: '1234' })
  @Column()
  tagNr!: string;

  @ApiModelProperty({ example: 'LR1' })
  @Column()
  location!: string;

  @ApiModelProperty({ example: 'EA' })
  @Column({ nullable: true })
  bbDown?: string;

  @ApiModelProperty({ example: 'EA' })
  @Column()
  bbLr!: string;

  @ApiModelProperty({ example: 'EA' })
  @Column({ nullable: true })
  bbOut?: string;

  @ApiModelProperty({ example: new Date() })
  @Column({ nullable: true })
  dateNeeded?: Date;

  @ApiModelProperty({ example: ['tourDeFrance.pdf', 'selfieFromParis.png'] })
  @Column('text', { array: true, default: [] })
  files!: string[];
}
