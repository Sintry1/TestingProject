import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LuggageType } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
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
  styleUrls: ['../../../../assets/styles/checkbox.scss', '../../../../assets/styles/dialog.scss'],
})
export class CreateCheckoutDialogComponent extends DropdownSelection {
  createCheckoutForm: UntypedFormGroup;
  checked = true;
  isLoading = false;
  bbInitials = bellBoyInitials;

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
    private service: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    super();
    this.createCheckoutForm = new UntypedFormGroup({
      room: new UntypedFormControl('', [Validators.required], valueInArrayValidator(rooms)),
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
        valueInArrayValidator(bellBoyInitials)
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
    this.filteredRooms = filterAutocompleteSelect(rooms, this.createCheckoutForm.get('room'));
    this.filteredBbLr = filterAutocompleteSelect(
      bellBoyInitials,
      this.createCheckoutForm.get('bbLr')
    );
    this.filteredBbDown = filterAutocompleteSelect(
      bellBoyInitials,
      this.createCheckoutForm.get('bbDown')
    );
    this.filteredLocations = filterAutocompleteSelect(
      luggageLocation,
      this.createCheckoutForm.get('location')
    );
    this.filteredBbOut = filterAutocompleteSelect(
      bellBoyInitials,
      this.createCheckoutForm.get('bbOut')
    );
  }

  onSubmit(): void {
    if (!this.createCheckoutForm.valid) {
      if (this.createCheckoutForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('bags')?.invalid) {
        this.bagsInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('bbDown')?.invalid) {
        this.bbDownInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      } else if (this.createCheckoutForm.get('bbLr')?.invalid) {
        this.bbLrInput.nativeElement.focus();
      }
    } else {
      this.createCheckout();
    }
  }

  createCheckout(): void {
    this.isLoading = true;
    this.service
      .create({
        room: this.createCheckoutForm.get('room')?.value,
        // roomReady: this.createCheckoutForm.get('roomReady')?.value,
        name: this.createCheckoutForm.get('name')?.value,
        arrivalTime: new Date(this.createCheckoutForm.get('arrivalTime')?.value),
        bags: this.createCheckoutForm.get('bags')?.value,
        tagNr: this.createCheckoutForm.get('tagNr')?.value,
        bbLr: this.createCheckoutForm.get('bbLr')?.value
          ? this.createCheckoutForm.get('bbLr')?.value
          : '',
        bbDown: this.createCheckoutForm.get('bbDown')?.value
          ? this.createCheckoutForm.get('bbDown')?.value
          : '',
        bbOut: this.createCheckoutForm.get('bbOut')?.value
          ? this.createCheckoutForm.get('bbOut')?.value
          : '',
        completedAt: toDateObject(this.createCheckoutForm.get('completedAt')?.value),
        location: this.createCheckoutForm.get('location')?.value
          ? this.createCheckoutForm.get('location')?.value
          : '',
        comments: this.createCheckoutForm.get('comments')?.value,
        luggageType: LuggageType.CHECKOUT,
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Check out luggage item created!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
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
}
