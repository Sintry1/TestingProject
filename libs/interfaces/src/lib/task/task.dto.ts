import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
import { ICreateTask, IGetTasks, ITask, IUpdateTask } from './task.interface';

export class CreateTaskRequest implements ICreateTask {
  @ApiModelProperty({ example: '07:00' })
  @IsNotEmpty()
  time!: string;

  @ApiModelProperty({
    example: 'Sign-in your radio. Take out bench, ashtray, (refresh sand if needed) & bikes.',
  })
  @IsNotEmpty()
  task!: string;

  @ApiModelProperty({ example: 'EA' })
  @IsNotEmpty()
  initials!: string;

  @ApiModelProperty({ example: 'Evening' })
  @IsNotEmpty()
  listName!: string;
}

export class UpdateTaskRequest implements IUpdateTask {
  @ApiModelProperty({ example: '07:00' })
  @IsOptional()
  time?: string;

  @ApiModelProperty({
    example: 'Sign-in your radio. Take out bench, ashtray, (refresh sand if needed) & bikes.',
  })
  @IsOptional()
  task?: string;

  @ApiModelProperty({ example: 'EA' })
  @IsOptional()
  initials?: string;

  @ApiModelProperty({ example: 'Morning' })
  @IsOptional()
  listName?: string;

  @ApiModelProperty({ example: new Date() })
  @IsOptional()
  @IsDateString()
  completedAt?: Date;
}

export class GetTasksResponse implements IGetTasks {
  @ApiModelProperty({ example: ['Morning', 'Evening'] })
  @IsNotEmpty()
  listNames!: string[];

  @ApiModelProperty({ example: [] })
  @IsNotEmpty()
  tasks!: ITask[];
}
