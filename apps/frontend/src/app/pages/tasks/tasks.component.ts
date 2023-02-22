import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITask, TableInfoOptions } from '@omnihost/interfaces';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { DisplayDateService } from '../../services/display-date.service';
import { SentryService } from '../../services/sentry.service';
import { TasksService } from '../../services/tasks.service';
import { orderByCompletedStatus } from '../../utils/order.util';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';

@Component({
  selector: 'frontend-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['../../../assets/styles/table.scss', './tasks.component.scss'],
})
export class TasksComponent {
  morningTasks: ITask[] = [];
  eveningTasks: ITask[] = [];
  displayDate = new Date();

  isLoading = false;

  headerRow = ['time', 'task', 'done', 'initials', 'actions'];

  constructor(
    private readonly tasksService: TasksService,
    private snackBar: MatSnackBar,
    private displayDateService: DisplayDateService,
    private dialog: MatDialog
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchTasks();
    });
  }

  fetchTasks(): void {
    this.isLoading = true;
    this.tasksService.getTasks(this.displayDate).subscribe({
      next: (tasks) => {
        this.morningTasks = orderByCompletedStatus(
          tasks.tasks.filter((task) => task.listName === 'Morning')
        );
        this.eveningTasks = orderByCompletedStatus(
          tasks.tasks.filter((task) => task.listName === 'Evening')
        );
      },
      error: (error) => {
        this.isLoading = false;
        SentryService.logError(error);
        this.snackBar.open('Tasks have failed to load', 'Okay', {
          duration: 10000,
        });
      },
    });
  }

  openTableInfo(): void {
    this.dialog.open(TableInfoDialogComponent, {
      data: TableInfoOptions.TASKS,
      width: '600px',
      disableClose: true,
    });
  }

  isPassed(taskTime: string): boolean {
    const timeDiff = 60 * 60 * 1000; // 1 hour in milliseconds

    const currentTime = new Date().getTime();
    const [hours, minutes] = taskTime.split(':').map(Number); // split taskTime into hours and minutes
    const taskDate = new Date().setHours(hours, minutes, 0, 0); // set the hours and minutes of the taskDate object

    if (
      currentTime >= new Date().setHours(23, 0, 0, 0) &&
      taskDate >= new Date().setHours(23, 0, 0, 0)
    ) {
      return true;
    }
    const timeDiffInMs = currentTime - taskDate; // calculate the time difference in milliseconds

    if (timeDiffInMs > timeDiff) {
      return true;
    }
    console.log(taskDate, new Date());

    return false;
  }

  openEditDialog(task: ITask): void {
    this.dialog.open(EditTaskDialogComponent, {
      width: '600px',
      disableClose: true,
      data: task,
      autoFocus: false,
    });
  }
}
