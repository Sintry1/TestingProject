import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITask } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { SentryService } from '../../../services/sentry.service';
import { TasksService } from '../../../services/tasks.service';
import { toDateObject, toDatetimeInputString } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bellBoyInitials } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';

@Component({
  selector: 'frontend-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['../../../../assets/styles/checkbox.scss', '../../../../assets/styles/dialog.scss'],
})
export class EditTaskDialogComponent extends DropdownSelection {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  taskId: string;
  isTaskComplete = false;

  filteredInitials: Observable<string[]> = new Observable<string[]>();

  @ViewChild('initials') initialsInput!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITask, // TODO: date type thing again
    private service: TasksService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    super();
    this.taskId = data.taskId;
    this.form = new UntypedFormGroup({
      initials: new UntypedFormControl(
        data.initials,
        [Validators.required],
        valueInArrayValidator(bellBoyInitials)
      ),
      completedAt: new UntypedFormControl(
        data.completedAt
          ? toDatetimeInputString(new Date(data.completedAt))
          : toDatetimeInputString(new Date()),
        [Validators.required]
      ),
    });

    // Init the filters
    this.filteredInitials = filterAutocompleteSelect(bellBoyInitials, this.form.get('initials'));
  }

  onSubmit(): void {
    if (this.form.get('initials')?.value.invalid) {
      this.initialsInput.nativeElement.focus();
    } else {
      this.updateTask();
    }
  }

  updateTask(): void {
    this.isLoading = true;
    this.service
      .updateTask(this.taskId, {
        initials: this.form.get('initials')?.value,
        completedAt: toDateObject(this.form.get('completedAt')?.value),
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Task item updated!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to update, please try again.', 'Okay', {
            duration: 10000,
          });
          this.isLoading = false;
        },
      });
  }

  reset() {
    this.service
      .updateTask(this.taskId, {
        initials: '',
        completedAt: null,
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Task item has been reset!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to reset task, please try again.', 'Okay', {
            duration: 10000,
          });
          this.isLoading = false;
        },
      });
  }
}
