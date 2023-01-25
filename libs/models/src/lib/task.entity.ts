import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { ITask } from '@omnihost/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompletedAt } from './base.entity';

@Entity('tasks')
export class Task extends CompletedAt implements ITask {
  @ApiModelProperty({ example: '80a0d2ac-ec67-482e-9017-909b72a74be7' })
  @PrimaryGeneratedColumn('uuid')
  taskId!: string;

  @ApiModelProperty({ example: '07:00' })
  @Column()
  time!: string;

  @ApiModelProperty({
    example: 'Sign-in your radio. Take out bench, ashtray, (refresh sand if needed) & bikes.',
  })
  @Column()
  task!: string;

  @ApiModelProperty({ example: 'EA' })
  @Column()
  initials!: string;

  @ApiModelProperty({ example: 'Morning' })
  @Column()
  listName!: string;
}
