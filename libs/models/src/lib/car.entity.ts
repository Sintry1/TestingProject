import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { ICar } from '@omnihost/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompletedAt } from './base.entity';

@Entity('cars')
export class Car extends CompletedAt implements ICar {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  carId!: string;

  @ApiModelProperty({ example: '1234' })
  @Column()
  tagNr!: string;

  @ApiModelProperty({ example: '101' })
  @Column()
  room!: string;

  @ApiModelProperty({ example: new Date() })
  @Column()
  arrivalDate!: Date;

  @ApiModelProperty({ example: new Date() })
  @Column()
  departureDate!: Date;

  @ApiModelProperty({ example: 'Larsen' })
  @Column()
  name!: string;

  @ApiModelProperty({ example: 'AB60789' })
  @Column()
  licensePlate!: string;

  @ApiModelProperty({ example: new Date() })
  @Column({ nullable: true })
  expirationDate?: Date;

  @ApiModelProperty({ example: new Date() })
  @Column({ nullable: true })
  pickUpTime?: Date;

  @ApiModelProperty({ example: new Date() })
  @Column({ nullable: true })
  deliveryTime?: Date;

  @ApiModelProperty({ example: 'EA' })
  @Column({ nullable: true })
  bbDown?: string;

  @ApiModelProperty({ example: 'EA' })
  @Column({ nullable: true })
  bbUp?: string;

  @ApiModelProperty({ example: 'Front' })
  @Column()
  location!: string;

  @ApiModelProperty({ example: '10' })
  @Column({ nullable: true })
  parkingLot?: string;

  @ApiModelProperty({ example: 'EA' })
  @Column({ nullable: true })
  bbOut?: string;

  @ApiModelProperty({ example: 'LUX - 2 bellmen required' })
  @Column({ nullable: true })
  comments?: string;

  @ApiModelProperty({ example: true })
  @Column()
  charged!: boolean;

  @ApiModelProperty({ example: ['ford_gt.pdf', 'the-flintstones-car.png'] })
  @Column('text', { array: true, default: [] })
  files!: string[];
}
