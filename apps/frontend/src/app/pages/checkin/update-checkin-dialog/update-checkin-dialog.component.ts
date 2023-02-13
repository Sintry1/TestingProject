import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@omnihost/interfaces';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { LuggageService } from '../../../services/luggage.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toTimeInputString } from '../../../utils/date.util';
import { bellBoyInitials, luggageLocation } from '../../../utils/dropdown-selection';

@Component({
  selector: 'frontend-update-checkin-dialog',
  templateUrl: './update-checkin-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/file-upload.scss',
  ],
})
export class UpdateCheckinDialogComponent {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  luggageId: string;
  bbInitials = bellBoyInitials;
  luggageLocation = luggageLocation;
  files: string[] = [];
  containsInvalidFiles = false;

  @ViewChild('fileUpload') fileUploadRef!: FileUploadComponent;
  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('bags') bagsInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('bbLr') bbLrInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<UpdateCheckinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ILuggage, // TODO: fix - date types mismatch
    private service: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.luggageId = data.luggageId;
    this.files = data.files;

    this.form = new UntypedFormGroup({
      room: new UntypedFormControl(data.room, [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      name: new UntypedFormControl(data.name, [Validators.required]),
      arrivalTime: new UntypedFormControl(
        data.arrivalTime ? toTimeInputString(new Date(data.arrivalTime)) : '',
        [Validators.required]
      ),
      bags: new UntypedFormControl(data.bags, [Validators.required]),
      tagNr: new UntypedFormControl(data.tagNr, [Validators.required]),
      bbLr: new UntypedFormControl(data.bbLr, [Validators.required]),
      bbOut: new UntypedFormControl(data.bbOut, []),
      location: new UntypedFormControl(data.location, [Validators.required]),
      completedAt: new UntypedFormControl(
        data.completedAt ? toTimeInputString(new Date(data.completedAt)) : '',
        []
      ),
      comments: new UntypedFormControl(data.comments, []),
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      if (this.form.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.form.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.form.get('bags')?.invalid) {
        this.bagsInput.nativeElement.focus();
      } else if (this.form.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.form.get('bbLr')?.invalid) {
        this.bbLrInput.nativeElement.focus();
      } else if (this.form.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      }
    } else if (this.containsInvalidFiles) {
      this.snackBar.open('Remove the invalid files before proceeding!', 'Okay', {
        duration: 10000,
      });
    } else {
      this.updateCheckin();
    }
  }

  updateCheckin(): void {
    this.isLoading = true;
    this.service
      .update(this.luggageId, {
        room: this.form.get('room')?.value,
        // roomReady: this.form.get('roomReady')?.value,
        name: this.form.get('name')?.value,
        arrivalTime: toDateObject(this.form.get('arrivalTime')?.value),
        bags: this.form.get('bags')?.value,
        tagNr: this.form.get('tagNr')?.value,
        bbLr: this.form.get('bbLr')?.value ? this.form.get('bbLr')?.value.toUpperCase() : '',
        bbOut: this.form.get('bbOut')?.value ? this.form.get('bbOut')?.value.toUpperCase() : '',
        location: this.form.get('location')?.value
          ? this.form.get('location')?.value.toUpperCase()
          : '',
        completedAt: toDateObject(this.form.get('completedAt')?.value),
        comments: this.form.get('comments')?.value,
      })
      .subscribe({
        next: () => {
          this.fileUploadRef.submit(this.luggageId);
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

  /**
   * Handle finished file upload.
   */
  finalizeSubmission($event: 'success' | 'fail') {
    if ($event === 'success') {
      this.snackBar.open('Luggage item updated!', 'Thanks', {
        duration: 5000,
      });
      document.location.reload();
      this.dialog.closeAll();
      this.isLoading = false;
    } else {
      this.snackBar.open('Failed to update the files, please try again.', 'Okay', {
        duration: 10000,
      });
      this.isLoading = false;
    }
  }

  updateFilesStatus($event: boolean) {
    this.containsInvalidFiles = $event;
  }
}
