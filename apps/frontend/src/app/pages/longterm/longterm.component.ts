import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  IAnnouncement,
  ICar,
  ILuggage,
  LuggageSortOptions,
  LuggageType,
  SortOrder,
  TableInfoOptions,
} from '@omnihost/interfaces';
import { CsvExportComponent } from '../../components/csv-export/csv-export.component';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { ViewImagesDialogComponent } from '../../components/view-images-dialog/view-images-dialog.component';
import { DisplayDateService } from '../../services/display-date.service';
import { LuggageService } from '../../services/luggage.service';
import { SentryService } from '../../services/sentry.service';
import { downloadCsv } from '../../utils/export.util';
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
  timeZone = 'UTC';

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

  luggageHeaders = [
    'Created At',
    'Last Updated At',
    'Completed At',
    'Luggage ID',
    'Luggage Type',
    'Room ready',
    'Room nr.',
    'Name',
    'Time of arrival',
    'Nr. of bags',
    'Comments',
    'Tag nr',
    'Location',
    'BB Down',
    'BB in LR',
    'BB Up',
    'Time in room',
    'Files',
  ];
  exportFilename = 'luggages-longterm-data';

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
          const longTermLuggage = luggage.filter(
            (item) => item.luggageType === LuggageType.LONG_TERM
          );
          this.originalLuggage = longTermLuggage;
          this.filteredLuggage = filterByCompletedAtAndOrderResults(
            longTermLuggage,
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

  openCsvExportDialog() {
    this.dialog.open(CsvExportComponent, {
      width: '600px',
      disableClose: true,
      data: {
        export: (from?: Date, to?: Date) => {
          this.luggageService.getLuggagesWithinRange(LuggageType.LONG_TERM, from, to).subscribe({
            next: (luggages) => {
              this.snackBar.open('Exporting Luggage Longterm data...', 'Thanks', { duration: 5000 });
              downloadCsv(luggages, this.luggageHeaders, this.exportFilename);
            },
            error: (error: HttpErrorResponse) => {
              SentryService.logError(error);
              this.snackBar.open('Failed to export the data, please try again.', 'Okay', {
                duration: 15000,
              });
            },
          });
        },
      },
    });
  }
}
