import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, startWith } from 'rxjs';
import { AssignmentsService } from '../../../services/assignments.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toDatetimeInputString } from '../../../utils/date.util';
import {
  bbAssignmentRequestedBy,
  bbAssignmentTask,
  bellBoyInitials,
} from '../../../utils/dropdown-selection';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';

@Component({
  selector: 'frontend-create-assignment-dialog',
  templateUrl: './create-assignment-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss'],
})
export class CreateAssignmentDialogComponent implements OnInit {
  createAssignmentForm = new UntypedFormGroup({});
  isLoading = false;
  maxDatetime = new Date(new Date().getTime() + 50000);
  bbInitials = bellBoyInitials;
  bbAssignmentTask = bbAssignmentTask;
  bbAssignmentRequestedBy = bbAssignmentRequestedBy;
  filteredTasks: Observable<string[]> = new Observable<string[]>();

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
  ) {}

  ngOnInit(): void {
    this.createAssignmentForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [Validators.maxLength(50), Validators.pattern('^[0-9]*$')]),
      task: new UntypedFormControl(
        '',
        Validators.maxLength(20),
        valueInArrayValidator(this.bbAssignmentTask)
      ),
      requestedBy: new UntypedFormControl('', [Validators.maxLength(20), Validators.required]),
      performedBy: new UntypedFormControl('', [Validators.maxLength(20)]),
      requestedAt: new UntypedFormControl(toDatetimeInputString(new Date()), [
        Validators.required,
        Validators.maxLength(20),
      ]),
      completedAt: new UntypedFormControl(''),
      comments: new UntypedFormControl('', [Validators.maxLength(1000), Validators.required]),
    });

    this.filteredTasks =
      this.createAssignmentForm.get('task')?.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const name = typeof value === 'string' ? value : value?.name;
          return name
            ? this._filter(name as string, this.bbAssignmentTask)
            : this.bbAssignmentTask.slice();
        })
      ) || new Observable<string[]>();
  }

  private _filter(name: string, options: string[]): string[] {
    const filterValue = name.toLowerCase();

    return options.filter((option) => option.toLowerCase().includes(filterValue));
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
