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
import { toDateObject } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bellBoyInitials, luggageLocation, rooms } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';

@Component({
  selector: 'frontend-create-checkout-dialog',
  templateUrl: './create-checkout-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/file-upload.scss',
  ],
})
export class CreateCheckoutDialogComponent extends DropdownSelection {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  bbInitials = bellBoyInitials;
  containsInvalidFiles = false;

  filteredRooms: Observable<string[]> = new Observable<string[]>();
  filteredBbLr: Observable<string[]> = new Observable<string[]>();
  filteredBbDown: Observable<string[]> = new Observable<string[]>();
  filteredLocations: Observable<string[]> = new Observable<string[]>();
  filteredBbOut: Observable<string[]> = new Observable<string[]>();

  bellboyListAndGuest = [...bellBoyInitials, 'Guest'];

  @ViewChild('fileUpload') fileUploadRef!: FileUploadComponent;
  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('bags') bagsInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('bbLr') bbLrInput!: ElementRef;
  @ViewChild('bbDown') bbDownInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;

  constructor(
    private service: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    super();
    this.form = new UntypedFormGroup({
      room: new UntypedFormControl('', [], valueInArrayValidator(rooms)),
      name: new UntypedFormControl('', [Validators.required]),
      bags: new UntypedFormControl('', [Validators.required]),
      tagNr: new UntypedFormControl('', [Validators.required]),
      bbLr: new UntypedFormControl(
        '',
        [Validators.required],
        valueInArrayValidator(bellBoyInitials)
      ),
      bbDown: new UntypedFormControl(
        '',
        [Validators.required],
        valueInArrayValidator(this.bellboyListAndGuest)
      ),
      bbOut: new UntypedFormControl('', [], valueInArrayValidator(bellBoyInitials)),
      completedAt: new UntypedFormControl('', []),
      location: new UntypedFormControl(
        '',
        [Validators.required],
        valueInArrayValidator(luggageLocation)
      ),
      comments: new UntypedFormControl('', []),
    });

    // Init the filters
    this.filteredRooms = filterAutocompleteSelect(rooms, this.form.get('room'));
    this.filteredBbLr = filterAutocompleteSelect(bellBoyInitials, this.form.get('bbLr'));
    this.filteredBbDown = filterAutocompleteSelect(
      this.bellboyListAndGuest,
      this.form.get('bbDown')
    );
    this.filteredLocations = filterAutocompleteSelect(luggageLocation, this.form.get('location'));
    this.filteredBbOut = filterAutocompleteSelect(bellBoyInitials, this.form.get('bbOut'));
  }

  onSubmit(): void {
    if (!this.form.valid) {
      if (this.form.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.form.get('bags')?.invalid) {
        this.bagsInput.nativeElement.focus();
      } else if (this.form.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.form.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.form.get('bbDown')?.invalid) {
        this.bbDownInput.nativeElement.focus();
      } else if (this.form.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      } else if (this.form.get('bbLr')?.invalid) {
        this.bbLrInput.nativeElement.focus();
      } else if (this.containsInvalidFiles) {
        this.snackBar.open('Remove the invalid files before proceeding!', 'Okay', {
          duration: 10000,
        });
      }
    } else {
      this.createCheckout();
    }
  }

  createCheckout(): void {
    this.isLoading = true;
    this.service
      .create({
        room: this.form.get('room')?.value,
        name: this.form.get('name')?.value,
        bags: this.form.get('bags')?.value,
        tagNr: this.form.get('tagNr')?.value,
        bbLr: this.form.get('bbLr')?.value ? this.form.get('bbLr')?.value : '',
        bbDown: this.form.get('bbDown')?.value ? this.form.get('bbDown')?.value : '',
        bbOut: this.form.get('bbOut')?.value ? this.form.get('bbOut')?.value : '',
        completedAt: toDateObject(this.form.get('completedAt')?.value),
        location: this.form.get('location')?.value ? this.form.get('location')?.value : '',
        comments: this.form.get('comments')?.value,
        luggageType: LuggageType.CHECKOUT,
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

  finalizeSubmission($event: 'success' | 'fail') {
    if ($event === 'success') {
      this.snackBar.open('Check Out luggage item created!', 'Thanks', {
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
