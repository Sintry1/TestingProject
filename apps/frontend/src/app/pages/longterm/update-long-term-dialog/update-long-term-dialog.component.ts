import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { LuggageService } from '../../../services/luggage.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toDatetimeInputString } from '../../../utils/date.util';
import { filterAutocompleteSelect } from '../../../utils/dialog.utils';
import { bellBoyInitials, luggageLocation, rooms } from '../../../utils/dropdown-selection';
import { DropdownSelection } from '../../../utils/dropdown-selection/dropdown-selection.class';
import { valueInArrayValidator } from '../../../utils/form-validators/array.validator';

@Component({
  selector: 'frontend-update-long-term-dialog',
  templateUrl: './update-long-term-dialog.component.html',
  styleUrls: ['../../../../assets/styles/checkbox.scss', '../../../../assets/styles/dialog.scss'],
})
export class UpdateLongTermDialogComponent extends DropdownSelection implements OnInit {
  updateLongTermForm = new UntypedFormGroup({});
  guestHasApproved = false;
  maxDatetime = new Date(new Date().getTime() + 50000);
  isLoading = false;

  filteredRooms: Observable<string[]> = new Observable<string[]>();
  filteredBbLr: Observable<string[]> = new Observable<string[]>();
  filteredLocations: Observable<string[]> = new Observable<string[]>();
  filteredBbOut: Observable<string[]> = new Observable<string[]>();

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
  }

  ngOnInit(): void {
    this.updateLongTermForm = new UntypedFormGroup({
      dateIn: new UntypedFormControl(
        this.data.createdAt ? toDatetimeInputString(new Date(this.data.createdAt)) : '',
        [Validators.required]
      ),
      room: new UntypedFormControl(
        this.data.room,
        [Validators.required],
        valueInArrayValidator(rooms)
      ),
      name: new UntypedFormControl(this.data.name, [Validators.required]),
      bags: new UntypedFormControl(this.data.bags, [Validators.required]),
      comments: new UntypedFormControl(this.data.comments, []),
      tagNr: new UntypedFormControl(this.data.tagNr, [Validators.required]),
      dateNeeded: new UntypedFormControl(
        this.data.arrivalTime ? toDatetimeInputString(new Date(this.data.arrivalTime)) : '',
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
    this.filteredRooms = filterAutocompleteSelect(rooms, this.updateLongTermForm.get('room'));
    this.filteredBbLr = filterAutocompleteSelect(
      bellBoyInitials,
      this.updateLongTermForm.get('bbLr')
    );
    this.filteredLocations = filterAutocompleteSelect(
      luggageLocation,
      this.updateLongTermForm.get('location')
    );
    this.filteredBbOut = filterAutocompleteSelect(
      bellBoyInitials,
      this.updateLongTermForm.get('bbOut')
    );
  }

  onSubmit(): void {
    if (!this.updateLongTermForm.valid) {
      if (this.updateLongTermForm.get('room')?.invalid) {
        this.roomInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('bags')?.invalid) {
        this.bagsInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('tagNr')?.invalid) {
        this.tagNrInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('bbLr')?.invalid) {
        this.bbLrInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('location')?.invalid) {
        this.locationInput.nativeElement.focus();
      } else if (this.updateLongTermForm.get('comments')?.invalid) {
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
        room: this.updateLongTermForm.get('room')?.value,
        name: this.updateLongTermForm.get('name')?.value,
        bags: this.updateLongTermForm.get('bags')?.value,
        comments: this.updateLongTermForm.get('comments')?.value,
        tagNr: this.updateLongTermForm.get('tagNr')?.value,
        arrivalTime: toDateObject(this.updateLongTermForm.get('dateNeeded')?.value),
        bbLr: this.updateLongTermForm.get('bbLr')?.value
          ? this.updateLongTermForm.get('bbLr')?.value
          : '',
        location: this.updateLongTermForm.get('location')?.value
          ? this.updateLongTermForm.get('location')?.value
          : '',
        bbOut: this.updateLongTermForm.get('bbOut')?.value
          ? this.updateLongTermForm.get('bbOut')?.value
          : '',
        completedAt: toDateObject(this.updateLongTermForm.get('dateOut')?.value),
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Long term item updated!', 'Thanks', {
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
