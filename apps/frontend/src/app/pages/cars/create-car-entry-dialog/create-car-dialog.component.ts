import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { CarService } from '../../../services/car.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bellBoyInitials, carLocation, rooms } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';
import { valueNotFutureValidator } from '../../../utils/form-validators/date.validator';

@Component({
  selector: 'frontend-create-car-dialog',
  templateUrl: './create-car-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/file-upload.scss',
  ],
})
export class CreateCarDialogComponent extends DropdownSelection {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  containsInvalidFiles = false;

  filteredRooms: Observable<string[]> = new Observable<string[]>();
  filteredBbDown: Observable<string[]> = new Observable<string[]>();
  filteredCarLocations: Observable<string[]> = new Observable<string[]>();

  @ViewChild('fileUpload') fileUploadRef!: FileUploadComponent;
  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('arrivalDate') arrivalDateInput!: ElementRef;
  @ViewChild('departureDate') departureDateInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('licensePlate') licensePlateInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;

  constructor(
    private carService: CarService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    super();
    this.form = new UntypedFormGroup({
      room: new UntypedFormControl('', [], valueInArrayValidator(rooms)),
      tagNr: new UntypedFormControl('', [Validators.required]),
      arrivalDate: new UntypedFormControl(
        new Date(),
        [Validators.required],
        valueNotFutureValidator()
      ),
      departureDate: new UntypedFormControl('', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      licensePlate: new UntypedFormControl('', [Validators.required]),
      expirationDate: new UntypedFormControl('', []),
      pickUpTime: new UntypedFormControl('', []),
      deliveryTime: new UntypedFormControl('', [], valueNotFutureValidator()),
      bbDown: new UntypedFormControl(
        '',
        [Validators.required],
        valueInArrayValidator(bellBoyInitials)
      ),
      location: new UntypedFormControl(
        '',
        [Validators.required],
        valueInArrayValidator(carLocation)
      ),
      parkingLot: new UntypedFormControl('', []),
      comments: new UntypedFormControl('', []),
    });

    // Init the filters
    this.filteredRooms = filterAutocompleteSelect(rooms, this.form.get('room'));
    this.filteredBbDown = filterAutocompleteSelect(bellBoyInitials, this.form.get('bbDown'));
    this.filteredCarLocations = filterAutocompleteSelect(carLocation, this.form.get('location'));
  }

  onSubmit() {
    if (!this.form.valid) {
      if (this.form.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.form.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.form.get('arrivalDate')?.invalid) {
        this.arrivalDateInput.nativeElement.focus();
      } else if (this.form.get('departureDate')?.invalid) {
        this.departureDateInput.nativeElement.focus();
      } else if (this.form.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.form.get('licensePlate')?.invalid) {
        this.licensePlateInput.nativeElement.focus();
      } else if (this.form.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      }
    } else {
      this.createCarListEntry();
    }
  }

  createCarListEntry(): void {
    this.isLoading = true;
    this.carService
      .createCar({
        room: this.form.get('room')?.value,
        tagNr: this.form.get('tagNr')?.value,
        arrivalDate: toDateObject(this.form.get('arrivalDate')?.value),
        departureDate: toDateObject(this.form.get('departureDate')?.value),
        name: this.form.get('name')?.value,
        licensePlate: this.form.get('licensePlate')?.value
          ? this.form.get('licensePlate')?.value
          : '',
        expirationDate: toDateObject(this.form.get('expirationDate')?.value),
        pickUpTime: toDateObject(this.form.get('pickUpTime')?.value),
        deliveryTime: new Date(this.form.get('deliveryTime')?.value),
        bbDown: this.form.get('bbDown')?.value,
        bbUp: this.form.get('bbUp')?.value ? this.form.get('bbUp')?.value : '',
        location: this.form.get('location')?.value,
        parkingLot: this.form.get('parkingLot')?.value,
        bbOut: this.form.get('bbOut')?.value ? this.form.get('bbOut')?.value : '',
        comments: this.form.get('comments')?.value,
        charged: false,
      })
      .subscribe({
        next: (response) => {
          this.fileUploadRef.submit(response.carId);
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to create, please try again.', 'Okay', {
            duration: 15000,
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
      this.snackBar.open('Car item created!', 'Thanks', {
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
