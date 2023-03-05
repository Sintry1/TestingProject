import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import {
  CreateTaskRequest,
  GetTasksResponse,
  Role,
  SortOrder,
  TaskSortOptions,
  UpdateTaskRequest,
} from '@omnihost/interfaces';
import { Task } from '@omnihost/models';
import { JwtAccessAuthGuard } from '../auth/jwt-auth-access.guard';
import { Roles } from '../auth/roles.decorator';
import { RequiredQuery } from '../decorators/required-query.decorator';
import { toBool } from '../utils/query-params.utils';
import { TasksService } from './tasks.service';

@ApiTags('Tasks')
@Controller('tasks')
@ApiBearerAuth()
@UseGuards(JwtAccessAuthGuard)
@Roles(Role.user, Role.manager)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({
    summary: 'Get a list of all tasks, or tasks from a given range of dates.',
  })
  @ApiOkResponse({ type: [Task] })
  @ApiQuery({ name: 'from', required: false, example: new Date() })
  @ApiQuery({ name: 'to', required: false, example: new Date() })
  @HttpCode(200)
  async getAllTasks(
    @Query('from')
    from: string,
    @Query('to')
    to: string
  ) {
    const fromDate = from ? new Date(Date.parse(from)) : undefined;
    const toDate = to ? new Date(Date.parse(to)) : undefined;
    
    return this.tasksService.findAll(fromDate, toDate);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of Tasks for the given day.' })
  @ApiOkResponse({ type: GetTasksResponse })
  @ApiQuery({ name: 'createdAt', required: true, example: new Date() })
  @ApiQuery({ name: 'status', required: false, example: 'true' })
  @ApiQuery({ name: 'search', required: false, example: 'text' })
  @ApiQuery({
    name: 'sortBy',
    enum: TaskSortOptions,
    required: false,
    example: TaskSortOptions.COMPLETED_AT,
  })
  @ApiQuery({
    name: 'sortOrder',
    enum: SortOrder,
    required: false,
    example: SortOrder.ASCENDING,
  })
  @HttpCode(200)
  async getTasksByCreatedAt(
    @RequiredQuery('createdAt') createdAt: string,
    @Query('status')
    status: string,
    @Query('listName')
    listName: string,
    @Query('search')
    search: string,
    @Query('sortBy')
    sortBy: TaskSortOptions,
    @Query('sortOrder')
    sortOrder: SortOrder
  ) {
    const createdAtDate = new Date(Date.parse(createdAt));
    return this.tasksService.findAllByCreatedAt(
      createdAtDate,
      toBool(status),
      listName,
      search,
      sortBy,
      sortOrder
    );
  }

  @Post()
  @ApiOperation({
    summary: 'Create a task entry.',
  })
  @ApiCreatedResponse({ type: Task })
  @HttpCode(201)
  async createTask(@Body() taskData: CreateTaskRequest) {
    return this.tasksService.createTask(taskData);
  }

  @Patch(':taskId')
  @ApiOperation({
    summary: 'Update a Task entry.',
  })
  @ApiCreatedResponse({ type: Task })
  @HttpCode(200)
  async updateTask(
    @Param('taskId', ParseUUIDPipe) taskId: string,
    @Body() taskData: UpdateTaskRequest
  ) {
    return this.tasksService.updateTask(taskId, taskData);
  }
}
