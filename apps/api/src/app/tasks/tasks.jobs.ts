import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TaskGenerator } from '@omnihost/task-generator';

@Injectable()
export class TasksJobs {
  constructor(private readonly tasksGenerator: TaskGenerator) {}

  // The timezone for this comes from the Docker container, which won't always match the client timezone.
  // So instead we just generate them during the night so it is ready in the morning for everyone.
  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  handleCron() {
    this.tasksGenerator.generateDailyTasks();
    Logger.log('Daily tasks generated!');
  }
}
