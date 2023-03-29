import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { LuggageService } from '../../../services/luggage.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateInputString, toDateObject, toDatetimeInputString } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bellBoyInitials, luggageLocation, rooms } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';

@Component({
  selector: 'frontend-update-long-term-dialog',
  templateUrl: './update-long-term-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/file-upload.scss',
  ],
})
export class UpdateLongTermDialogComponent extends DropdownSelection implements OnInit {
  form = new UntypedFormGroup({});
  guestHasApproved = false;
  maxDatetime = new Date(new Date().getTime() + 50000);
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
  @ViewChild('comments') commentsInput!: ElementRef;

  constructor(
    private luggageService: LuggageService,
    @Inject(MAT_DIALOG_DATA) public data: ILuggage, // TODO: Fix date type
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    super();
    this.luggageId = data.luggageId;
    this.files = data.files;
  }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      dateIn: new UntypedFormControl(
        this.data.createdAt ? toDatetimeInputString(new Date(this.data.createdAt)) : '',
        [Validators.required]
      ),
      room: new UntypedFormControl(this.data.room, [], valueInArrayValidator(rooms)),
      name: new UntypedFormControl(this.data.name, [Validators.required]),
      bags: new UntypedFormControl(this.data.bags, [Validators.required]),
      comments: new UntypedFormControl(this.data.comments, []),
      tagNr: new UntypedFormControl(this.data.tagNr, [Validators.required]),
      dateNeeded: new UntypedFormControl(
        this.data.arrivalTime ? toDateInputString(new Date(this.data.arrivalTime)) : '',
        []
      ),
      bbLr: new UntypedFormControl(
        this.data.bbLr,
        [Validators.required],
        valueInArrayValidator(bellBoyInitials)
      ),
      location: new UntypedFormControl(
        this.data.location,
        [Validators.required],
        valueInArrayValidator(luggageLocation)
      ),
      bbOut: new UntypedFormControl(this.data.bbOut, [], valueInArrayValidator(bellBoyInitials)),
      dateOut: new UntypedFormControl(
        this.data.completedAt ? toDatetimeInputString(new Date(this.data.completedAt)) : '',
        []
      ),
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
      } else if (this.form.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      }
    } else {
      this.updateLongTermEntry();
    }
  }

  updateLongTermEntry(): void {
    this.isLoading = true;
    this.luggageService
      .update(this.data.luggageId, {
        room: this.form.get('room')?.value,
        name: this.form.get('name')?.value,
        bags: this.form.get('bags')?.value,
        comments: this.form.get('comments')?.value,
        tagNr: this.form.get('tagNr')?.value,
        arrivalTime: toDateObject(this.form.get('dateNeeded')?.value),
        bbLr: this.form.get('bbLr')?.value,
        location: this.form.get('location')?.value,
        bbOut: this.form.get('bbOut')?.value ?? null,
        completedAt: toDateObject(this.form.get('dateOut')?.value),
      })
      .subscribe({
        next: (response) => {
          this.fileUploadRef.submit(response.luggageId);
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
