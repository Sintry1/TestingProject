import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { ICar } from '@omnihost/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompletedAt } from './base.entity';

@Entity('cars')
export class Car extends CompletedAt implements ICar {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  carId!: string;

  @ApiModelProperty({ example: '2345' })
  @Column()
  tagNr!: string;

  @ApiModelProperty({ example: '211' })
  @Column()
  room!: string;

  @ApiModelProperty({ example: new Date() })
  @Column()
  arrivalDate!: Date;

  @ApiModelProperty({ example: new Date() })
  @Column()
  departureDate!: Date;

  @ApiModelProperty({ example: 'Madsen' })
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

  @ApiModelProperty({ example: 'FV' })
  @Column({ nullable: true })
  bbDown?: string;

  @ApiModelProperty({ example: 'FV' })
  @Column({ nullable: true })
  bbUp?: string;

  @ApiModelProperty({ example: 'Front' })
  @Column()
  location!: string;

  @ApiModelProperty({ example: 'c102' })
  @Column({ nullable: true })
  parkingLot?: string;

  @ApiModelProperty({ example: 'FV' })
  @Column({ nullable: true })
  bbOut?: string;

  @ApiModelProperty({ example: 'luxurious car' })
  @Column({ nullable: true })
  comments?: string;

  @ApiModelProperty({ example: true })
  @Column()
  charged!: boolean;
}
