import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IResetPasswordToken } from '@omnihost/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity('resetPasswordTokens')
export class ResetPasswordToken extends Base implements IResetPasswordToken {
  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @PrimaryGeneratedColumn('uuid')
  resetPasswordTokenId!: string;

  @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @Column({ type: 'uuid' })
  userId!: string;

  @ApiModelProperty({ example: new Date() })
  @Column()
  expiresAt!: Date;
}
