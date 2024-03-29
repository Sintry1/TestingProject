import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateTaskRequest,
  GetTasksResponse,
  SortOrder,
  TaskSortOptions,
  UpdateTaskRequest,
} from '@omnihost/interfaces';
import { Task } from '@omnihost/models';
import { Between, ILike, Repository, MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import { filterStatus } from '../utils/query-params.utils';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>
  ) {}

  async findAll(from: Date | undefined, to: Date | undefined) {
    let range = undefined;
    if (from && to) {
      range = {
        createdAt: Between<Date>(
          new Date(from.setUTCHours(0, 0, 0, 0)),
          new Date(to.setUTCHours(23, 59, 59, 999))
        ),
      };
    } else if (from) {
      range = { createdAt: MoreThanOrEqual<Date>(new Date(from.setUTCHours(0, 0, 0, 0))) };
    } else if (to) {
      range = { createdAt: LessThanOrEqual<Date>(new Date(to.setUTCHours(23, 59, 59, 999))) };
    }

    return this.taskRepo.find({ where: range, order: { createdAt: 'ASC' } });
  }

  async findAllByCreatedAt(
    createdAt: Date,
    status: boolean | undefined,
    listName: string | undefined,
    search: string | undefined,
    sortBy: TaskSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ): Promise<GetTasksResponse> {
    const baseConditions = {
      createdAt: Between<Date>(
        new Date(createdAt.setUTCHours(0, 0, 0, 0)),
        new Date(createdAt.setUTCHours(23, 59, 59, 999))
      ),
      completedAt: filterStatus(status),
      listName,
    };
    const searchCondition = search ? ILike(`%${search}%`) : undefined;

    const tasks = await this.taskRepo.find({
      where: [
        { ...baseConditions, time: searchCondition },
        { ...baseConditions, task: searchCondition },
        { ...baseConditions, initials: searchCondition },
      ],
      order: this.getSortingConditions(sortBy, sortOrder),
    });
    const listNames = (
      await this.taskRepo
        .createQueryBuilder('task')
        .select('task.listName', 'listName')
        .distinct(true)
        .getRawMany()
    ).map((listName) => {
      return listName.listName;
    });

    return { tasks, listNames };
  }

  async createTask(taskData: CreateTaskRequest) {
    return await this.taskRepo.save(taskData);
  }

  async updateTask(taskId: string, taskData: UpdateTaskRequest) {
    const task = await this.taskRepo.findOneByOrFail({ taskId });

    for (const key in taskData) {
      if (Object.prototype.hasOwnProperty.call(taskData, key)) {
        task[key] = taskData[key];
      }
    }

    return await this.taskRepo.save(task);
  }

  private getSortingConditions(
    sortBy: TaskSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    switch (sortBy) {
      case TaskSortOptions.TIME:
        return { time: sortOrder };
      case TaskSortOptions.COMPLETED_AT:
        return { completedAt: sortOrder };
      default:
        return undefined;
    }
  }
}
