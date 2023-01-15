import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IToken } from '@omnihost/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity('tokens')
export class Token extends Base implements IToken {
  @ApiModelProperty({ example: '80a0d2ac-ec67-482e-9017-909b72a74be7' })
  @PrimaryGeneratedColumn('uuid')
  tokenId!: string;

  @ApiModelProperty()
  @Column({ length: 2048 })
  accessToken!: string;

  @ApiModelProperty()
  @Column({ length: 2048, nullable: true })
  refreshToken?: string;
}
