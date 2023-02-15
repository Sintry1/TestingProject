import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAssignment } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { AssignmentsService } from '../../../services/assignments.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toDatetimeInputString } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import {
  bbAssignmentRequestedBy,
  bbAssignmentTasks,
  bellBoyInitials,
  rooms,
} from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';

@Component({
  selector: 'frontend-update-assignment-dialog',
  templateUrl: './update-assignment-dialog.component.html',
  styleUrls: ['../../../../assets/styles/checkbox.scss', '../../../../assets/styles/dialog.scss'],
})
export class UpdateAssignmentDialogComponent extends DropdownSelection implements OnInit {
  form = new UntypedFormGroup({});
  maxDatetime = new Date(new Date().getTime() + 50000);

  bbInitials = bellBoyInitials;
  bbAssignmentTasks = bbAssignmentTasks;
  bbAssignmentRequestedBy = bbAssignmentRequestedBy;
  isLoading = false;

  filteredRooms: Observable<string[]> = new Observable<string[]>();
  filteredTasks: Observable<string[]> = new Observable<string[]>();
  filteredRequestedBy: Observable<string[]> = new Observable<string[]>();
  filteredPerformedBy: Observable<string[]> = new Observable<string[]>();

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('task') taskInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;
  @ViewChild('requestedBy') requestedByInput!: ElementRef;
  @ViewChild('requestedAt') requestedAtInput!: ElementRef;
  @ViewChild('performedBy') performedByInput!: ElementRef;
  @ViewChild('completedAt') completedAtInput!: ElementRef;

  constructor(
    private assignmentService: AssignmentsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: IAssignment // TODO: Look into fixing this: misrepresentation of data: receivedAt and completedAt are not actually Date objects, but strings
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      room: new UntypedFormControl(this.data.room, [], valueInArrayValidator(rooms)),
      task: new UntypedFormControl(this.data.task, [], valueInArrayValidator(bbAssignmentTasks)),
      comments: new UntypedFormControl(this.data.comments, [
        Validators.maxLength(1000),
        Validators.required,
      ]),
      requestedBy: new UntypedFormControl(
        this.data.requestedBy,
        [Validators.required],
        valueInArrayValidator(bbAssignmentRequestedBy)
      ),
      performedBy: new UntypedFormControl(
        this.data.performedBy,
        [],
        valueInArrayValidator(bellBoyInitials)
      ),
      requestedAt: new UntypedFormControl(toDatetimeInputString(new Date(this.data.requestedAt)), [
        Validators.required,
      ]),
      completedAt: new UntypedFormControl(
        this.data.completedAt ? toDatetimeInputString(new Date(this.data.completedAt)) : ''
      ),
    });

    // Init the filters
    this.filteredRooms = filterAutocompleteSelect(rooms, this.form.get('room'));
    this.filteredTasks = filterAutocompleteSelect(bbAssignmentTasks, this.form.get('task'));
    this.filteredRequestedBy = filterAutocompleteSelect(
      bbAssignmentRequestedBy,
      this.form.get('requestedBy')
    );
    this.filteredPerformedBy = filterAutocompleteSelect(
      bellBoyInitials,
      this.form.get('performedBy')
    );
  }

  onSubmit(): void {
    if (!this.form.valid) {
      if (this.form.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.form.get('task')?.invalid) {
        this.taskInput.nativeElement.focus();
      } else if (this.form.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      } else if (this.form.get('requestedBy')?.invalid) {
        this.requestedByInput.nativeElement.focus();
      } else if (this.form.get('performedBy')?.invalid) {
        this.performedByInput.nativeElement.focus();
      }
    } else {
      this.updateAssignment();
    }
  }

  updateAssignment(): void {
    this.isLoading = true;
    this.assignmentService
      .updateAssignment(this.data.assignmentId, {
        room: this.form.get('room')?.value,
        task: this.form.get('task')?.value,
        comments: this.form.get('comments')?.value,
        requestedBy: this.form.get('requestedBy')?.value ? this.form.get('requestedBy')?.value : '',
        performedBy: this.form.get('performedBy')?.value ? this.form.get('performedBy')?.value : '',
        requestedAt: toDateObject(this.form.get('requestedAt')?.value),
        completedAt: toDateObject(this.form.get('completedAt')?.value),
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Assignment updated!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to update assignment, please try again.', 'Okay', {
            duration: 10000,
          });
          this.isLoading = false;
        },
      });
  }
}
