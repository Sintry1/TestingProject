import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IBase, ICompletedAt } from '@omnihost/interfaces';
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// base.entity.ts
export abstract class Base implements IBase {
  @ApiModelProperty()
  @CreateDateColumn({ default: () => 'NOW()' })
  createdAt?: Date;

  @ApiModelProperty()
  @UpdateDateColumn()
  updatedAt?: Date;
}

export abstract class CompletedAt extends Base implements ICompletedAt {
  @ApiModelProperty()
  @Column({ nullable: true })
  completedAt?: Date;
}
