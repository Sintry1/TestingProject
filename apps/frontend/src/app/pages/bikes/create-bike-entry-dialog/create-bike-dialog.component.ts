import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { BikeService } from '../../../services/bikes.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toDatetimeInputString } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bikeListReserved, rooms } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';
import { valueNotFutureValidator } from '../../../utils/form-validators/date.validator';
@Component({
  selector: 'frontend-create-bike-dialog',
  templateUrl: './create-bike-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss', '../../../../assets/styles/checkbox.scss'],
})
export class CreateBikeDialogComponent extends DropdownSelection {
  form: UntypedFormGroup;
  isLoading = false;
  bikeFormCompleted = false;

  filteredRooms: Observable<string[]> = new Observable<string[]>();
  filteredBikesReserved: Observable<string[]> = new Observable<string[]>();

  @ViewChild('nrOfBikes') nrOfBikesInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('reservedBy') reservedByInput!: ElementRef;

  constructor(
    private bikeService: BikeService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    super();
    this.form = new UntypedFormGroup({
      room: new UntypedFormControl('', [], valueInArrayValidator(rooms)),
      nrOfBikes: new UntypedFormControl('', [Validators.required]),
      pickUpTime: new UntypedFormControl('', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      reservedBy: new UntypedFormControl(
        '',
        [Validators.required],
        valueInArrayValidator(bikeListReserved)
      ),
      comments: new UntypedFormControl('', []),
      completedAt: new UntypedFormControl('', [], valueNotFutureValidator()),
    });

    // Init the filters
    this.filteredRooms = filterAutocompleteSelect(rooms, this.form.get('room'));
    this.filteredBikesReserved = filterAutocompleteSelect(
      bikeListReserved,
      this.form.get('reservedBy')
    );
  }

  onSubmit() {
    if (!this.form.valid) {
      if (this.form.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.form.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.form.get('reservedBy')?.invalid) {
        this.reservedByInput.nativeElement.focus();
      } else if (this.form.get('nrOfBikes')?.invalid) {
        this.nrOfBikesInput.nativeElement.focus();
      }
    } else {
      this.createBikeListEntry();
    }
  }

  createBikeListEntry(): void {
    this.isLoading = true;
    this.bikeService
      .createBike({
        room: this.form.get('room')?.value,
        nrOfBikes: this.form.get('nrOfBikes')?.value,
        pickUpTime: toDateObject(this.form.get('pickUpTime')?.value),
        name: this.form.get('name')?.value,
        reservedBy: this.form.get('reservedBy')?.value,
        bikeFormCompleted: this.bikeFormCompleted,
        comments: this.form.get('comments')?.value,
        completedAt: toDateObject(this.form.get('completedAt')?.value),
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Bike added!', 'Thanks', { duration: 5000 });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to create bike, please try again.', 'Okay', {
            duration: 15000,
          });
          this.isLoading = false;
        },
      });
  }
}
