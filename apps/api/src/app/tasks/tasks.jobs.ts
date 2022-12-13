import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TaskGenerator } from '@omnihost/task-generator';

@Injectable()
export class TasksJobs {
  constructor(private readonly tasksGenerator: TaskGenerator) {}

  @Cron(CronExpression.EVERY_DAY_AT_7AM)
  handleCron() {
    this.tasksGenerator.generateDailyTasks();
    Logger.log('Daily tasks generated!');
  }
}
