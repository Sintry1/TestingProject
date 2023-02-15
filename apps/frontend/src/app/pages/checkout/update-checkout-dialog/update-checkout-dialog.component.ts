import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { LuggageService } from '../../../services/luggage.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toTimeInputString } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bellBoyInitials, luggageLocation, rooms } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';

@Component({
  selector: 'frontend-update-checkout-dialog',
  templateUrl: './update-checkout-dialog.component.html',
  styleUrls: ['../../../../assets/styles/checkbox.scss', '../../../../assets/styles/dialog.scss'],
})
export class UpdateCheckoutDialogComponent extends DropdownSelection {
  updateCheckoutForm: UntypedFormGroup;
  isLoading = false;
  luggageId: string;

  filteredRooms: Observable<string[]> = new Observable<string[]>();
  filteredBbLr: Observable<string[]> = new Observable<string[]>();
  filteredBbDown: Observable<string[]> = new Observable<string[]>();
  filteredLocations: Observable<string[]> = new Observable<string[]>();
  filteredBbOut: Observable<string[]> = new Observable<string[]>();

  @ViewChild('room') roomInput!: ElementRef;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('bags') bagsInput!: ElementRef;
  @ViewChild('tagNr') tagNrInput!: ElementRef;
  @ViewChild('bbLr') bbLrInput!: ElementRef;
  @ViewChild('bbDown') bbDownInput!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<UpdateCheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ILuggage, // TODO: Fix - date type
    private service: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    super();
    this.luggageId = data.luggageId;
    this.updateCheckoutForm = new UntypedFormGroup({
      room: new UntypedFormControl(data.room, [Validators.required], valueInArrayValidator(rooms)),
      name: new UntypedFormControl(data.name, [Validators.required]),
      bags: new UntypedFormControl(data.bags, [Validators.required]),
      tagNr: new UntypedFormControl(data.tagNr, [Validators.required]),
      bbLr: new UntypedFormControl(
        data.bbLr,
        [Validators.required],
        valueInArrayValidator(bellBoyInitials)
      ),
      bbDown: new UntypedFormControl(
        data.bbDown,
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
        []
      ),
      comments: new UntypedFormControl(data.comments, []),
    });

    // Init the filters
    this.filteredRooms = filterAutocompleteSelect(rooms, this.updateCheckoutForm.get('room'));
    this.filteredBbLr = filterAutocompleteSelect(
      bellBoyInitials,
      this.updateCheckoutForm.get('bbLr')
    );
    this.filteredBbDown = filterAutocompleteSelect(
      bellBoyInitials,
      this.updateCheckoutForm.get('bbDown')
    );
    this.filteredLocations = filterAutocompleteSelect(
      luggageLocation,
      this.updateCheckoutForm.get('location')
    );
    this.filteredBbOut = filterAutocompleteSelect(
      bellBoyInitials,
      this.updateCheckoutForm.get('bbOut')
    );
  }

  onSubmit(): void {
    if (!this.updateCheckoutForm.valid) {
      if (this.updateCheckoutForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.updateCheckoutForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.updateCheckoutForm.get('bags')?.invalid) {
        this.bagsInput.nativeElement.focus();
      } else if (this.updateCheckoutForm.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.updateCheckoutForm.get('bbDown')?.invalid) {
        this.bbDownInput.nativeElement.focus();
      } else if (this.updateCheckoutForm.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      } else if (this.updateCheckoutForm.get('bbLr')?.invalid) {
        this.bbLrInput.nativeElement.focus();
      }
    } else {
      this.updateCheckout();
    }
  }

  updateCheckout(): void {
    this.isLoading = true;
    this.service
      .update(this.luggageId, {
        room: this.updateCheckoutForm.get('room')?.value,
        name: this.updateCheckoutForm.get('name')?.value,
        bags: this.updateCheckoutForm.get('bags')?.value,
        tagNr: this.updateCheckoutForm.get('tagNr')?.value,
        bbLr: this.updateCheckoutForm.get('bbLr')?.value
          ? this.updateCheckoutForm.get('bbLr')?.value
          : '',
        bbDown: this.updateCheckoutForm.get('bbDown')?.value
          ? this.updateCheckoutForm.get('bbDown')?.value
          : '',
        bbOut: this.updateCheckoutForm.get('bbOut')?.value
          ? this.updateCheckoutForm.get('bbOut')?.value
          : '',
        location: this.updateCheckoutForm.get('location')?.value
          ? this.updateCheckoutForm.get('location')?.value
          : '',
        completedAt: toDateObject(this.updateCheckoutForm.get('completedAt')?.value),
        comments: this.updateCheckoutForm.get('comments')?.value,
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Luggage item updated!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
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
}
