import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CarService } from '../../../services/car.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bellBoyInitials, carLocation, rooms } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';

@Component({
  selector: 'frontend-create-car-dialog',
  templateUrl: './create-car-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss', '../../../../assets/styles/checkbox.scss'],
})
export class CreateCarDialogComponent extends DropdownSelection {
  createCarForm: UntypedFormGroup;
  checked = true;
  isLoading = false;

  filteredRooms: Observable<string[]> = new Observable<string[]>();
  filteredBbDown: Observable<string[]> = new Observable<string[]>();
  filteredCarLocations: Observable<string[]> = new Observable<string[]>();

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
    this.createCarForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [Validators.required], valueInArrayValidator(rooms)),
      tagNr: new UntypedFormControl('', [Validators.required]),
      arrivalDate: new UntypedFormControl(new Date(), [Validators.required]),
      departureDate: new UntypedFormControl('', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      licensePlate: new UntypedFormControl('', [Validators.required]),
      expirationDate: new UntypedFormControl('', []),
      pickUpTime: new UntypedFormControl('', []),
      deliveryTime: new UntypedFormControl('', []),
      bbDown: new UntypedFormControl('', [], valueInArrayValidator(bellBoyInitials)),
      location: new UntypedFormControl(
        '',
        [Validators.required],
        valueInArrayValidator(carLocation)
      ),
      comments: new UntypedFormControl('', []),
    });

    // Init the filters
    this.filteredRooms = filterAutocompleteSelect(rooms, this.createCarForm.get('room'));
    this.filteredBbDown = filterAutocompleteSelect(
      bellBoyInitials,
      this.createCarForm.get('bbDown')
    );
    this.filteredCarLocations = filterAutocompleteSelect(
      carLocation,
      this.createCarForm.get('location')
    );
  }

  onSubmit() {
    if (!this.createCarForm.valid) {
      if (this.createCarForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.createCarForm.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.createCarForm.get('arrivalDate')?.invalid) {
        this.arrivalDateInput.nativeElement.focus();
      } else if (this.createCarForm.get('departureDate')?.invalid) {
        this.departureDateInput.nativeElement.focus();
      } else if (this.createCarForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.createCarForm.get('licensePlate')?.invalid) {
        this.licensePlateInput.nativeElement.focus();
      } else if (this.createCarForm.get('location')?.invalid) {
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
        room: this.createCarForm.get('room')?.value,
        tagNr: this.createCarForm.get('tagNr')?.value,
        arrivalDate: toDateObject(this.createCarForm.get('arrivalDate')?.value),
        departureDate: toDateObject(this.createCarForm.get('departureDate')?.value),
        name: this.createCarForm.get('name')?.value,
        licensePlate: this.createCarForm.get('licensePlate')?.value
          ? this.createCarForm.get('licensePlate')?.value
          : '',
        expirationDate: toDateObject(this.createCarForm.get('expirationDate')?.value),
        pickUpTime: toDateObject(this.createCarForm.get('pickUpTime')?.value),
        deliveryTime: new Date(this.createCarForm.get('deliveryTime')?.value),
        bbDown: this.createCarForm.get('bbDown')?.value
          ? this.createCarForm.get('bbDown')?.value
          : '',
        bbUp: this.createCarForm.get('bbUp')?.value ? this.createCarForm.get('bbUp')?.value : '',
        location: this.createCarForm.get('location')?.value
          ? this.createCarForm.get('location')?.value
          : '',
        parkingLot: this.createCarForm.get('parkingLot')?.value,
        bbOut: this.createCarForm.get('bbOut')?.value ? this.createCarForm.get('bbOut')?.value : '',
        comments: this.createCarForm.get('comments')?.value,
        charged: false,
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Car added!', 'Thanks', { duration: 5000 });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
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
}
