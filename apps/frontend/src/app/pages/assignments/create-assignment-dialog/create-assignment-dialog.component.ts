import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
import { valueNotFutureValidator } from '../../../utils/form-validators/date.validator';

@Component({
  selector: 'frontend-create-assignment-dialog',
  templateUrl: './create-assignment-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss'],
})
export class CreateAssignmentDialogComponent extends DropdownSelection implements OnInit {
  form = new UntypedFormGroup({});
  isLoading = false;
  maxDatetime = new Date(new Date().getTime() + 50000);

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
    private dialog: MatDialog
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      room: new UntypedFormControl('', [], valueInArrayValidator(rooms)),
      task: new UntypedFormControl('', [], valueInArrayValidator(bbAssignmentTasks)),
      requestedBy: new UntypedFormControl(
        '',
        [Validators.required],
        valueInArrayValidator(bbAssignmentRequestedBy)
      ),
      performedBy: new UntypedFormControl('', [], valueInArrayValidator(bellBoyInitials)),
      requestedAt: new UntypedFormControl(toDatetimeInputString(new Date()), [
        Validators.required,
        Validators.maxLength(20),
        valueNotFutureValidator(),
      ]),
      completedAt: new UntypedFormControl(''),
      comments: new UntypedFormControl('', [Validators.maxLength(1000), Validators.required]),
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
      this.createAssignment();
    }
  }

  createAssignment(): void {
    this.isLoading = true;
    this.assignmentService
      .createAssignment({
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
          this.snackBar.open('Assignment added!', 'Thanks', { duration: 5000 });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to add assignment, please try again.', 'Okay', {
            duration: 10000,
          });
          this.isLoading = false;
        },
      });
  }
}
