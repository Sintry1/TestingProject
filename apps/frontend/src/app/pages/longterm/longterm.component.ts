import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  IAnnouncement,
  ICar,
  ILuggage,
  LuggageSortOptions,
  SortOrder,
  TableInfoOptions,
} from '@omnihost/interfaces';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { ViewImagesDialogComponent } from '../../components/view-images-dialog/view-images-dialog.component';
import { DisplayDateService } from '../../services/display-date.service';
import { LuggageService } from '../../services/luggage.service';
import { SentryService } from '../../services/sentry.service';
import { filterByCompletedAtAndOrderResults } from '../../utils/order.util';
import { CreateLongTermDialogComponent } from './create-long-term-dialog/create-long-term-dialog.component';
import { UpdateLongTermDialogComponent } from './update-long-term-dialog/update-long-term-dialog.component';

@Component({
  selector: 'frontend-longterm',
  templateUrl: 'longterm.component.html',
  styleUrls: ['../../../assets/styles/table.scss'],
})
export class LongtermComponent {
  originalLuggage: ILuggage[] = [];
  filteredLuggage: ILuggage[] = [];
  listNames?: string[];
  chosenListName = '';
  isLoading = false;
  sortBy: LuggageSortOptions = LuggageSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  displayDate = new Date();
  showAll = false;

  displayedColumns = [
    'dateIn',
    'room',
    'name',
    'nrOfBags',
    'tagNr',
    'dateNeeded',
    'bbLr',
    'location',
    'bbOut',
    'dateOut',
    'comments',
  ];

  constructor(
    private readonly luggageService: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private displayDateService: DisplayDateService
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchLuggage();
    });
  }

  fetchLuggage(): void {
    this.isLoading = true;
    this.luggageService
      .getLongTerm(this.displayDate, this.sortBy, this.sortOrder, this.search)
      .subscribe({
        next: (luggage) => {
          this.originalLuggage = luggage;
          this.filteredLuggage = filterByCompletedAtAndOrderResults(
            luggage,
            this.showAll,
            this.displayDate
          );
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          SentryService.logError(error);
          this.snackBar.open('Luggages have failed to load', 'Okay', {
            duration: 10000,
          });
        },
      });
  }

  openTableInfo(): void {
    this.dialog.open(TableInfoDialogComponent, {
      data: TableInfoOptions.LONG_TERM,
      width: '600px',
      disableClose: true,
    });
  }

  openEditDialog(luggage: ILuggage): void {
    this.dialog.open(UpdateLongTermDialogComponent, {
      width: '600px',
      disableClose: true,
      data: luggage,
      autoFocus: false,
    });
  }

  openCreateDialog(): void {
    this.dialog.open(CreateLongTermDialogComponent, {
      width: '600px',
      disableClose: true,
    });
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
    this.filteredLuggage = filterByCompletedAtAndOrderResults(
      this.originalLuggage,
      this.showAll,
      this.displayDate
    );
  }

  viewFiles(element: ILuggage | ICar | IAnnouncement) {
    if (element.files.length > 0) {
      this.dialog.open(ViewImagesDialogComponent, {
        width: '600px',
        disableClose: true,
        data: element,
        autoFocus: false,
      });
    } else {
      this.openEditDialog(element as ILuggage);
    }
  }
}
