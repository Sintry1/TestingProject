import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAssignment, TableInfoOptions } from '@omnihost/interfaces';
import { CsvExportComponent } from '../../components/csv-export/csv-export.component';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { AssignmentsService } from '../../services/assignments.service';
import { DisplayDateService } from '../../services/display-date.service';
import { SentryService } from '../../services/sentry.service';
import { downloadCsv } from '../../utils/export.util';
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

  assignmentHeaders = [
    'Created At',
    'Last Updated At',
    'Performed At',
    'Assignment ID',
    'Room nr.',
    'Task',
    'Comments',
    'Requested by',
    'Performed by',
    'Requested at',
  ];
  exportFilename = 'assignments-checkin-data';

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

  openCreateDialog(): void {
    this.dialog.open(CreateAssignmentDialogComponent, { width: '600px', disableClose: true });
  }

  openEditDialog(assignment: IAssignment): void {
    this.dialog.open(UpdateAssignmentDialogComponent, {
      width: '600px',
      disableClose: true,
      data: assignment,
      autoFocus: false,
    });
  }

  openCsvExportDialog() {
    this.dialog.open(CsvExportComponent, {
      width: '600px',
      disableClose: true,
      data: {
        export: (from?: Date, to?: Date) => {
          this.assignmentsService.getAssignmentsWithinRange(from, to).subscribe({
            next: (assignments) => {
              this.snackBar.open('Exporting Assignments data...', 'Thanks', { duration: 5000 });
              downloadCsv(assignments, this.assignmentHeaders, this.exportFilename);
            },
            error: (error: HttpErrorResponse) => {
              SentryService.logError(error);
              this.snackBar.open('Failed to export the data, please try again.', 'Okay', {
                duration: 15000,
              });
            },
          });
        },
      },
    });
  }
}
