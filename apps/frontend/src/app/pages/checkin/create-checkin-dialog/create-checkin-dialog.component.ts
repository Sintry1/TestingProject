import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LuggageType } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { LuggageService } from '../../../services/luggage.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toTimeInputString } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bellBoyInitials, luggageLocation, rooms } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';

@Component({
  selector: 'frontend-create-checkin-dialog',
  templateUrl: './create-checkin-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/file-upload.scss',
  ],
})
export class CreateCheckinDialogComponent extends DropdownSelection {
  createCheckinForm: UntypedFormGroup;
  checked = true;
  isLoading = false;
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
    private service: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    super();
    this.createCheckinForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [Validators.required], valueInArrayValidator(rooms)),
      // roomReady: new UntypedFormControl('false', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      arrivalTime: new UntypedFormControl(toTimeInputString(new Date()), [Validators.required]),
      bags: new UntypedFormControl('', [Validators.required]),
      tagNr: new UntypedFormControl('', [Validators.required]),
      bbLr: new UntypedFormControl(
        '',
        [Validators.required],
        valueInArrayValidator(bellBoyInitials)
      ),
      location: new UntypedFormControl(
        '',
        [Validators.required],
        valueInArrayValidator(luggageLocation)
      ),
      bbOut: new UntypedFormControl('', [], valueInArrayValidator(bellBoyInitials)),
      completedAt: new UntypedFormControl('', []),
      comments: new UntypedFormControl('', []),
    });

    // Init the filters
    this.filteredRooms = filterAutocompleteSelect(rooms, this.createCheckinForm.get('room'));
    this.filteredBbLr = filterAutocompleteSelect(
      bellBoyInitials,
      this.createCheckinForm.get('bbLr')
    );
    this.filteredLocations = filterAutocompleteSelect(
      luggageLocation,
      this.createCheckinForm.get('location')
    );
    this.filteredBbOut = filterAutocompleteSelect(
      bellBoyInitials,
      this.createCheckinForm.get('bbOut')
    );
  }

  onSubmit(): void {
    if (!this.createCheckinForm.valid) {
      if (this.createCheckinForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.createCheckinForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.createCheckinForm.get('bags')?.invalid) {
        this.bagsInput.nativeElement.focus();
      } else if (this.createCheckinForm.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.createCheckinForm.get('bbLr')?.invalid) {
        this.bbLrInput.nativeElement.focus();
      } else if (this.createCheckinForm.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      }
    } else if (this.containsInvalidFiles) {
      this.snackBar.open('Remove the invalid files before proceeding!', 'Okay', {
        duration: 10000,
      });
    } else {
      this.createCheckin();
    }
  }

  createCheckin(): void {
    this.isLoading = true;
    this.service
      .create({
        room: this.createCheckinForm.get('room')?.value,
        // roomReady: this.createCheckinForm.get('roomReady')?.value,
        name: this.createCheckinForm.get('name')?.value,
        arrivalTime: toDateObject(this.createCheckinForm.get('arrivalTime')?.value),
        bags: this.createCheckinForm.get('bags')?.value,
        tagNr: this.createCheckinForm.get('tagNr')?.value,
        bbLr: this.createCheckinForm.get('bbLr')?.value
          ? this.createCheckinForm.get('bbLr')?.value
          : '',
        location: this.createCheckinForm.get('location')?.value
          ? this.createCheckinForm.get('location')?.value
          : '',
        bbOut: this.createCheckinForm.get('bbOut')?.value
          ? this.createCheckinForm.get('bbOut')?.value
          : '',
        completedAt: toDateObject(this.createCheckinForm.get('completedAt')?.value),
        comments: this.createCheckinForm.get('comments')?.value,
        luggageType: LuggageType.CHECKIN,
      })
      .subscribe({
        next: (response) => {
          this.fileUploadRef.submit(response.luggageId);
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to create, please try again.', 'Okay', {
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
      this.snackBar.open('Check In luggage item created!', 'Thanks', {
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
