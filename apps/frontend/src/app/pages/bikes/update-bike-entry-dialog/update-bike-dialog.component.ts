import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IBike } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { BikeService } from '../../../services/bikes.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toDatetimeInputString } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bikeListReserved, rooms } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';
@Component({
  selector: 'frontend-update-bike-dialog',
  templateUrl: './update-bike-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss', '../../../../assets/styles/checkbox.scss'],
})
export class UpdateBikeDialogComponent extends DropdownSelection {
  form: UntypedFormGroup;
  checked = true;
  isLoading = false;
  bikeFormCompleted: boolean;

  filteredRooms: Observable<string[]> = new Observable<string[]>();
  filteredBikesReserved: Observable<string[]> = new Observable<string[]>();

  @ViewChild('nrOfBikes') nrOfBikesInput!: ElementRef;
  @ViewChild('pickUpTime') pickUpTimeInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('reservedBy') reservedByInput!: ElementRef;

  constructor(
    private bikeService: BikeService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: IBike // TODO: Fix - Dates are strings not Date objects.
  ) {
    super();
    this.form = new UntypedFormGroup({
      room: new UntypedFormControl(this.data.room, [], valueInArrayValidator(rooms)),
      nrOfBikes: new UntypedFormControl(data.nrOfBikes, [Validators.required]),
      pickUpTime: new UntypedFormControl(
        data.pickUpTime ? toDatetimeInputString(new Date(data.pickUpTime)) : '',
        [Validators.required]
      ),
      name: new UntypedFormControl(data.name, [Validators.required]),
      reservedBy: new UntypedFormControl(
        data.reservedBy,
        [Validators.required],
        valueInArrayValidator(bikeListReserved)
      ),
      comments: new UntypedFormControl(data.comments, []),
      completedAt: new UntypedFormControl(
        data.completedAt ? toDatetimeInputString(new Date(data.completedAt)) : '',
        []
      ),
    });
    this.bikeFormCompleted = data.bikeFormCompleted ?? false;

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
      } else if (this.form.get('nrOfBikes')?.invalid) {
        this.nrOfBikesInput.nativeElement.focus();
      } else if (this.form.get('pickUpTime')?.invalid) {
        this.pickUpTimeInput.nativeElement.focus();
      } else if (this.form.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.form.get('reservedBy')?.invalid) {
        this.reservedByInput.nativeElement.focus();
      }
    } else {
      this.updateBikeListEntry();
    }
  }

  updateBikeListEntry(): void {
    this.isLoading = true;
    this.bikeService
      .updateBike(this.data.bikeId, {
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
          this.snackbar.open('Bike updated!', 'Thanks', { duration: 5000 });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackbar.open('Failed to update, please try again.', 'Okay', {
            duration: 15000,
          });
          this.isLoading = false;
        },
      });
  }
}
