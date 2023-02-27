import { Component, OnInit } from '@angular/core';
import { ITask, SortOrder, TaskSortOptions } from '@omnihost/interfaces';
import { TasksService } from '../../../services/tasks.service';
import { filterByCompletedAtAndOrderResults } from '../../../utils/order.util';

@Component({
  selector: 'frontend-tasks-notification-widget',
  templateUrl: './tasks-notification-widget.component.html',
  styleUrls: ['./tasks-notification-widget.component.scss'],
})
export class TasksNotificationWidgetComponent implements OnInit {
  tasksList: ITask[] = [];
  readyTasksList: ITask[] = [];
  overdueTasksList: ITask[] = [];
  sortBy: TaskSortOptions = TaskSortOptions.TIME;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  showAll = false;
  nextTask: Date | undefined = undefined;
  timeTillPickup = new Date();

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    // Instead of display date, im just using today, since the notifications wont make sense being viewed in the past.
    this.tasksService.getTasks(new Date()).subscribe({
      next: (result) => {
        this.tasksList = filterByCompletedAtAndOrderResults(result.tasks, false, new Date());
        this.UpdateTasksListNumbers();
        console.log('Ready: ', this.readyTasksList, 'Overdue: ', this.overdueTasksList);
      },
      error: (err) => {
        console.error(err);
      },
    });

    setTimeout(() => {
      this.getOldest();
    }, 1000);
  }

  getOldest(): void {
    let oldestTask = this.tasksList[0];

    for (const task of this.tasksList) {
      if (task.time && oldestTask.time) {
        if (task.time < oldestTask.time) {
          oldestTask = task;
        }
      }
    }

    if (oldestTask.time) {
      this.nextTask = this.parseTimeString(oldestTask.time);
    }
  }

  UpdateTasksListNumbers(): void {
    const THIRTY_FIVE_MINUTES = 35 * 60 * 1000; // Convert 35 minutes to milliseconds
    const FIVE_MINUTES = 5*60*1000;
    const now = new Date().getTime();

    this.readyTasksList = this.tasksList.filter((task) => {
      if (!task.completedAt) {
        return true;
      }
      const expirationTime = this.parseTimeString(task.time).getTime();

      // Check that the time is within 30 min & check that the time hasn't been passed yet
      if (now - expirationTime  < THIRTY_FIVE_MINUTES && now - expirationTime > FIVE_MINUTES) {
        // remove task from the tasksList
        this.tasksList = this.tasksList.filter((currentTask) => currentTask.taskId !== task.taskId);
        return false;
      } else {
        return true;
      }
    });

    this.overdueTasksList = this.tasksList.filter((task) => {
      if (!task.completedAt) {
        return true;
      }
      const expirationTime = this.parseTimeString(task.time).getTime();

      // Check that the expirationTime current time has passed
      if (expirationTime < now) {
        // remove task from the tasksList
        this.tasksList = this.tasksList.filter((currentTask) => currentTask.taskId !== task.taskId);
        return true;
      } else {
        return false;
      }
    });
  }

  parseTimeString(timeString: string): Date {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }
}
