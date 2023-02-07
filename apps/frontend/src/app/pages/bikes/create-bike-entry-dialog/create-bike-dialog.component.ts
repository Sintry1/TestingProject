import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BikeService } from '../../../services/bikes.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toDatetimeInputString } from '../../../utils/date.util';
import { bikeListReserved } from '../../../utils/dropdown-selection';
@Component({
  selector: 'frontend-create-bike-dialog',
  templateUrl: './create-bike-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/file-upload.scss',
  ],
})
export class CreateBikeDialogComponent {
  createBikeForm: UntypedFormGroup;
  isLoading = false;
  bikeFormCompleted = false;
  bikeListReserved = bikeListReserved;

  @ViewChild('nrOfBikes') nrOfBikesInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('reservedBy') reservedByInput!: ElementRef;

  constructor(
    private bikeService: BikeService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.createBikeForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[0-9]*$'),
      ]),
      nrOfBikes: new UntypedFormControl('', [Validators.required]),
      pickUpTime: new UntypedFormControl(toDatetimeInputString(new Date()), [Validators.required]),
      name: new UntypedFormControl('', [Validators.required]),
      reservedBy: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', []),
      completedAt: new UntypedFormControl('', []),
    });
  }

  onSubmit() {
    if (!this.createBikeForm.valid) {
      if (this.createBikeForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.createBikeForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.createBikeForm.get('reservedBy')?.invalid) {
        this.reservedByInput.nativeElement.focus();
      } else if (this.createBikeForm.get('nrOfBikes')?.invalid) {
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
        room: this.createBikeForm.get('room')?.value,
        nrOfBikes: this.createBikeForm.get('nrOfBikes')?.value,
        pickUpTime: toDateObject(this.createBikeForm.get('pickUpTime')?.value),
        name: this.createBikeForm.get('name')?.value,
        reservedBy: this.createBikeForm.get('reservedBy')?.value,
        bikeFormCompleted: this.bikeFormCompleted,
        comments: this.createBikeForm.get('comments')?.value,
        completedAt: toDateObject(this.createBikeForm.get('completedAt')?.value),
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
