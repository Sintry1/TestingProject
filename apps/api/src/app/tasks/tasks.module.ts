import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '@omnihost/models';
import { TaskGenerator } from '@omnihost/task-generator';
import { TasksController } from './tasks.controller';
import { TasksJobs } from './tasks.jobs';
import { TasksService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksJobs, TaskGenerator, TasksService],
  controllers: [TasksController],
  exports: [TasksService],
})
export class TasksModule {}
