import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICar } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { CarService } from '../../../services/car.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateInputString, toDateObject, toDatetimeInputString } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bellBoyInitials, carLocation, rooms } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';

@Component({
  selector: 'frontend-update-car-dialog',
  templateUrl: './update-car-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss'],
})
export class UpdateCarDialogComponent extends DropdownSelection {
  updateCarForm: UntypedFormGroup;
  checked = true;
  isLoading = false;
  guestHasApproved = false;

  filteredRooms: Observable<string[]> = new Observable<string[]>();
  filteredBbOut: Observable<string[]> = new Observable<string[]>();
  filteredBbDown: Observable<string[]> = new Observable<string[]>();
  filteredCarLocations: Observable<string[]> = new Observable<string[]>();

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('arrivalDate') arrivalDateInput!: ElementRef;
  @ViewChild('departureDate') departureDateInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('licensePlate') licensePlateInput!: ElementRef;
  @ViewChild('expirationDate') expirationDateInput!: ElementRef;
  @ViewChild('pickUpTime') pickUpTimeInput!: ElementRef;
  @ViewChild('bbDown') bbDownInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;

  constructor(
    private carService: CarService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: ICar // TODO: fix - once again, dates are not Date objects, but strings.
  ) {
    super();
    this.updateCarForm = new UntypedFormGroup({
      room: new UntypedFormControl(data.room, [Validators.required], valueInArrayValidator(rooms)),
      tagNr: new UntypedFormControl(data.tagNr, [Validators.required]),
      arrivalDate: new UntypedFormControl(toDateInputString(new Date(data.arrivalDate)), [
        Validators.required,
      ]),
      departureDate: new UntypedFormControl(toDateInputString(new Date(data.departureDate)), [
        Validators.required,
      ]),
      name: new UntypedFormControl(data.name, [Validators.required]),
      licensePlate: new UntypedFormControl(data.licensePlate, [Validators.required]),
      expirationDate: new UntypedFormControl(
        data.expirationDate ? toDatetimeInputString(new Date(data.expirationDate)) : '',
        []
      ),
      pickUpTime: new UntypedFormControl(
        data.pickUpTime ? toDatetimeInputString(new Date(data.pickUpTime)) : '',
        []
      ),
      deliveryTime: new UntypedFormControl(
        data.deliveryTime ? toDatetimeInputString(new Date(data.deliveryTime)) : '',
        []
      ),
      bbDown: new UntypedFormControl(data.bbDown, [], valueInArrayValidator(bellBoyInitials)),
      bbUp: new UntypedFormControl(data.bbUp, [], valueInArrayValidator(bellBoyInitials)),
      location: new UntypedFormControl(
        data.location,
        [Validators.required],
        valueInArrayValidator(carLocation)
      ),
      parkingLot: new UntypedFormControl(data.parkingLot, []),
      bbOut: new UntypedFormControl(data.bbOut, [], valueInArrayValidator(bellBoyInitials)),
      comments: new UntypedFormControl(data.comments, []),
      charged: new UntypedFormControl(data.charged, []),
    });

    // Init the filters
    this.filteredRooms = filterAutocompleteSelect(rooms, this.updateCarForm.get('room'));
    this.filteredBbDown = filterAutocompleteSelect(
      bellBoyInitials,
      this.updateCarForm.get('bbDown')
    );
    this.filteredBbOut = filterAutocompleteSelect(bellBoyInitials, this.updateCarForm.get('bbOut'));
    this.filteredCarLocations = filterAutocompleteSelect(
      carLocation,
      this.updateCarForm.get('location')
    );
  }

  onSubmit() {
    if (!this.updateCarForm.valid) {
      if (this.updateCarForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.updateCarForm.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.updateCarForm.get('arrivalDate')?.invalid) {
        this.arrivalDateInput.nativeElement.focus();
      } else if (this.updateCarForm.get('departureDate')?.invalid) {
        this.departureDateInput.nativeElement.focus();
      } else if (this.updateCarForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.updateCarForm.get('licensePlate')?.invalid) {
        this.licensePlateInput.nativeElement.focus();
      } else if (this.updateCarForm.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      }
    } else {
      this.updateCarListEntry();
    }
  }

  updateCarListEntry(): void {
    this.isLoading = true;
    this.carService
      .updateCar(this.data.carId, {
        room: this.updateCarForm.get('room')?.value,
        tagNr: this.updateCarForm.get('tagNr')?.value,
        arrivalDate: toDateObject(this.updateCarForm.get('arrivalDate')?.value),
        departureDate: toDateObject(this.updateCarForm.get('departureDate')?.value),
        name: this.updateCarForm.get('name')?.value,
        licensePlate: this.updateCarForm.get('licensePlate')?.value
          ? this.updateCarForm.get('licensePlate')?.value
          : '',
        expirationDate: toDateObject(this.updateCarForm.get('expirationDate')?.value),
        pickUpTime: toDateObject(this.updateCarForm.get('pickUpTime')?.value),
        deliveryTime: toDateObject(this.updateCarForm.get('deliveryTime')?.value),
        bbDown: this.updateCarForm.get('bbDown')?.value
          ? this.updateCarForm.get('bbDown')?.value
          : '',
        bbUp: this.updateCarForm.get('bbUp')?.value ? this.updateCarForm.get('bbUp')?.value : '',
        location: this.updateCarForm.get('location')?.value,
        parkingLot: this.updateCarForm.get('parkingLot')?.value,
        bbOut: this.updateCarForm.get('bbOut')?.value ? this.updateCarForm.get('bbOut')?.value : '',
        comments: this.updateCarForm.get('comments')?.value,
        charged: this.updateCarForm.get('charged')?.value,
        completedAt: this.updateCarForm.get('deliveryTime')?.value,
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Car updated!', 'Thanks', { duration: 5000 });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to update, please try again.', 'Okay', {
            duration: 15000,
          });
          this.isLoading = false;
        },
      });
  }
}
