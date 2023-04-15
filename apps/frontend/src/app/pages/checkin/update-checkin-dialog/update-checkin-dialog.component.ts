import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { LuggageService } from '../../../services/luggage.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toTimeInputString } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bellBoyInitials, luggageLocation, rooms } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';
import { valueNotFutureValidator } from '../../../utils/form-validators/date.validator';

@Component({
  selector: 'frontend-update-checkin-dialog',
  templateUrl: './update-checkin-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/file-upload.scss',
  ],
})
export class UpdateCheckinDialogComponent extends DropdownSelection {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  luggageId: string;
  files: string[] = [];
  containsInvalidFiles = false;

  filteredRooms: Observable<string[]> = new Observable<string[]>();
  filteredBbLr: Observable<string[]> = new Observable<string[]>();
  filteredLocations: Observable<string[]> = new Observable<string[]>();
  filteredBbOut: Observable<string[]> = new Observable<string[]>();

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
    super();
    this.luggageId = data.luggageId;
    this.files = data.files;

    this.form = new UntypedFormGroup({
      room: new UntypedFormControl(this.data.room, [], valueInArrayValidator(rooms)),
      name: new UntypedFormControl(data.name, [Validators.required]),
      arrivalTime: new UntypedFormControl(
        data.arrivalTime ? toTimeInputString(new Date(data.arrivalTime)) : '',
        [Validators.required],
        valueNotFutureValidator()
      ),
      bags: new UntypedFormControl(data.bags, [Validators.required]),
      tagNr: new UntypedFormControl(data.tagNr, [Validators.required]),
      bbLr: new UntypedFormControl(
        data.bbLr,
        [Validators.required],
        valueInArrayValidator(bellBoyInitials)
      ),
      bbOut: new UntypedFormControl(data.bbOut, [], valueInArrayValidator(bellBoyInitials)),
      location: new UntypedFormControl(
        data.location,
        [Validators.required],
        valueInArrayValidator(luggageLocation)
      ),
      completedAt: new UntypedFormControl(
        data.completedAt ? toTimeInputString(new Date(data.completedAt)) : '',
        [],
        valueNotFutureValidator()
      ),
      comments: new UntypedFormControl(data.comments, []),
    });

    // Init the filters
    this.filteredRooms = filterAutocompleteSelect(rooms, this.form.get('room'));
    this.filteredBbLr = filterAutocompleteSelect(bellBoyInitials, this.form.get('bbLr'));
    this.filteredLocations = filterAutocompleteSelect(luggageLocation, this.form.get('location'));
    this.filteredBbOut = filterAutocompleteSelect(bellBoyInitials, this.form.get('bbOut'));
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
        name: this.form.get('name')?.value,
        arrivalTime: toDateObject(this.form.get('arrivalTime')?.value),
        bags: this.form.get('bags')?.value,
        tagNr: this.form.get('tagNr')?.value,
        bbLr: this.form.get('bbLr')?.value ? this.form.get('bbLr')?.value : '',
        bbOut: this.form.get('bbOut')?.value ? this.form.get('bbOut')?.value : '',
        location: this.form.get('location')?.value ? this.form.get('location')?.value : '',
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
