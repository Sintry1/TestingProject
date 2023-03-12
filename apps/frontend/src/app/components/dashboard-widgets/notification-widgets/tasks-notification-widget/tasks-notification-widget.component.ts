import { Component, OnInit } from '@angular/core';
import { ITask, SortOrder, TaskSortOptions } from '@omnihost/interfaces';
import { TasksService } from '../../../../services/tasks.service';
import { filterByCompletedAtAndOrderResults } from '../../../../utils/order.util';

@Component({
  selector: 'frontend-tasks-notification-widget',
  templateUrl: './tasks-notification-widget.component.html',
  styleUrls: ['../../../../../assets/styles/notification-widget.scss'],
})
export class TasksNotificationWidgetComponent implements OnInit {
  tasksList: ITask[] = [];
  fullTasksList: ITask[] = [];
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
        this.getOldest();
      },
      error: (err) => {
        console.error(err);
      },
    });

    // TODO: Create a better solution for this
    setTimeout(() => {
      this.getOldest();
    }, 1000);
  }

  getOldest(): void {
    let oldestTask = this.fullTasksList[0];

    for (const task of this.fullTasksList) {
      const oldestTaskTime = this.parseTimeString(oldestTask.time);
      const taskTime = this.parseTimeString(task.time);

      if (taskTime < oldestTaskTime && !task.completedAt) {
        oldestTask = task;
      }
    }

    if (oldestTask.time) {
      this.nextTask = this.parseTimeString(oldestTask.time);
    }
  }

  UpdateTasksListNumbers(): void {
    const ONE_HOUR = 60 * 60 * 1000; // Convert 1 hour to milliseconds
    const now = new Date().getTime();

    const updatedTasksList: ITask[] = [];

    this.tasksList.forEach((task) => {
      this.fullTasksList.push(task);
      const expirationTime = this.parseTimeString(task.time).getTime();
      if (!task.completedAt) {
        if (expirationTime < now) {
          // check if task is more than 60 minutes past its scheduled time
          if (now - expirationTime > ONE_HOUR) {
            this.overdueTasksList.push(task);
            return;
          }
          // check if task is between now and 30 minutes past its scheduled time
          if (now - expirationTime > 0) {
            this.readyTasksList.push(task);
            return;
          }
        } else {
          // check if task is scheduled for the future
          updatedTasksList.push(task);
        }
      }
    });

    // remove tasks from tasksList that have been added to readyTasksList or overdueTasksList
    this.tasksList = updatedTasksList.filter(
      (task) => !this.readyTasksList.includes(task) && !this.overdueTasksList.includes(task)
    );
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
