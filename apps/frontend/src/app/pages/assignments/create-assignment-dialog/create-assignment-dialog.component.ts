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

@Component({
  selector: 'frontend-create-assignment-dialog',
  templateUrl: './create-assignment-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss'],
})
export class CreateAssignmentDialogComponent extends DropdownSelection implements OnInit {
  createAssignmentForm = new UntypedFormGroup({});
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
    this.createAssignmentForm = new UntypedFormGroup({
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
      ]),
      completedAt: new UntypedFormControl(''),
      comments: new UntypedFormControl('', [Validators.maxLength(1000), Validators.required]),
    });

    // Init the filters
    this.filteredRooms = filterAutocompleteSelect(rooms, this.createAssignmentForm.get('room'));
    this.filteredTasks = filterAutocompleteSelect(
      bbAssignmentTasks,
      this.createAssignmentForm.get('task')
    );
    this.filteredRequestedBy = filterAutocompleteSelect(
      bbAssignmentRequestedBy,
      this.createAssignmentForm.get('requestedBy')
    );
    this.filteredPerformedBy = filterAutocompleteSelect(
      bellBoyInitials,
      this.createAssignmentForm.get('performedBy')
    );
  }

  onSubmit(): void {
    if (!this.createAssignmentForm.valid) {
      if (this.createAssignmentForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.createAssignmentForm.get('task')?.invalid) {
        this.taskInput.nativeElement.focus();
      } else if (this.createAssignmentForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      } else if (this.createAssignmentForm.get('requestedBy')?.invalid) {
        this.requestedByInput.nativeElement.focus();
      } else if (this.createAssignmentForm.get('performedBy')?.invalid) {
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
        room: this.createAssignmentForm.get('room')?.value,
        task: this.createAssignmentForm.get('task')?.value,
        comments: this.createAssignmentForm.get('comments')?.value,
        requestedBy: this.createAssignmentForm.get('requestedBy')?.value
          ? this.createAssignmentForm.get('requestedBy')?.value
          : '',
        performedBy: this.createAssignmentForm.get('performedBy')?.value
          ? this.createAssignmentForm.get('performedBy')?.value
          : '',
        requestedAt: toDateObject(this.createAssignmentForm.get('requestedAt')?.value),
        completedAt: toDateObject(this.createAssignmentForm.get('completedAt')?.value),
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
