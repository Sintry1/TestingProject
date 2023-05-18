import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAssignment, TableInfoOptions } from '@omnihost/interfaces';
import { CsvExportComponent } from '../../components/csv-export/csv-export.component';
import { ManagerAccessDialogComponent } from '../../components/manager-access-dialog/manager-access-dialog.component';
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
  completeAssignments: IAssignment[] = [];
  incompleteAssignments: IAssignment[] = [];
  displayDate = new Date();
  isLoading = false;

  columns = [
    { fieldName: 'room', displayName: 'Room nr' },
    { fieldName: 'task', displayName: 'Task' },
    { fieldName: 'comments', displayName: 'Comments' },
    { fieldName: 'requestedBy', displayName: 'Requested by' },
    { fieldName: 'requestedAt', displayName: 'Requested at' },
    { fieldName: 'performedBy', displayName: 'Performed by' },
    { fieldName: 'completedAt', displayName: 'Performed at' },
  ];

  columnHeaders = this.columns.map((field) => field.fieldName);

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
        this.completeAssignments = this.assignmentList.filter(
          (assignment) => assignment.completedAt
        );
        this.incompleteAssignments = this.assignmentList.filter(
          (assignment) => !assignment.completedAt
        );
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
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        component: CsvExportComponent,
        width: '600px',
        disableClose: true,
        componentData: {
          tableName: 'assignments',
          columns: this.columns,
        },
      },
    });
  }
}
