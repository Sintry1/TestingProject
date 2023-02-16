import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAssignment, TableInfoOptions } from '@omnihost/interfaces';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { AssignmentsService } from '../../services/assignments.service';
import { DisplayDateService } from '../../services/display-date.service';
import { SentryService } from '../../services/sentry.service';
import { orderByCompletedStatus } from '../../utils/order.util';
import { CreateAssignmentDialogComponent } from './create-assignment-dialog/create-assignment-dialog.component';
import { UpdateAssignmentDialogComponent } from './update-assignment-dialog/update-assignment-dialog.component';

@Component({
  selector: 'frontend-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['../../../assets/styles/table.scss'],
})
export class AssignmentsComponent {
  assignmentList: IAssignment[] = [];
  displayDate = new Date();
  isLoading = false;

  assignmentColumns = [
    'room',
    'task',
    'comments',
    'requestedBy',
    'requestedAt',
    'performedBy',
    'completedAt',
  ];

  constructor(
    private assignmentsService: AssignmentsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private displayDateService: DisplayDateService
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchAssignments();
    });
  }

  fetchAssignments(): void {
    this.isLoading = true;

    this.assignmentsService.getAssignments(this.displayDate).subscribe({
      next: (assignments) => {
        this.assignmentList = orderByCompletedStatus(assignments);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        SentryService.logError(error);
        this.snackBar.open(
          'Assignment data have failed to load, please try reloading the page.',
          'Okay',
          {
            duration: 10000,
          }
        );
      },
    });
  }

  openTableInfo(): void {
    this.dialog.open(TableInfoDialogComponent, {
      data: TableInfoOptions.ASSIGNMENTS,
      width: '600px',
      disableClose: true,
    });
  }

  createAssignment(): void {
    this.dialog.open(CreateAssignmentDialogComponent, { width: '600px', disableClose: true });
  }

  editAssignment(assignment: IAssignment): void {
    this.dialog.open(UpdateAssignmentDialogComponent, {
      width: '600px',
      disableClose: true,
      data: assignment,
    });
  }
}
