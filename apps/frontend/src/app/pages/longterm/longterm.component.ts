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
import { CsvExportComponent } from '../../components/csv-export/csv-export.component';
import { ManagerAccessDialogComponent } from '../../components/manager-access-dialog/manager-access-dialog.component';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { ViewFilesDialogComponent } from '../../components/view-files-dialog/view-files-dialog.component';
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
  completedLongTerm: ILuggage[] = [];
  incompleteLongTerm: ILuggage[] = [];
  listNames?: string[];
  chosenListName = '';
  isLoading = false;
  sortBy: LuggageSortOptions = LuggageSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  displayDate = new Date();
  timeZone = 'UTC';

  columns = [
    { fieldName: 'name', displayName: 'Name' },
    { fieldName: 'room', displayName: 'Room nr' },
    { fieldName: 'createdAt', displayName: 'Created At' },
    { fieldName: 'dateNeeded', displayName: 'Time Needed' },
    { fieldName: 'nrOfBags', displayName: 'Nr. of bags' },
    { fieldName: 'tagNr', displayName: 'Tag nr' },
    { fieldName: 'location', displayName: 'Location' },
    { fieldName: 'bbLr', displayName: 'BB in LR' },
    { fieldName: 'completedAt', displayName: 'Date out' },
    { fieldName: 'bbOut', displayName: 'BB out' },
    { fieldName: 'comments', displayName: 'Comments' },
  ];

  columnHeaders = this.columns.map((field) => field.fieldName);

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
            false,
            this.displayDate
          );
          this.incompleteLongTerm = this.filteredLuggage.filter((luggage) => !luggage.completedAt);
          this.completedLongTerm = this.filteredLuggage.filter((luggage) => luggage.completedAt);
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
      minWidth: '600px',
      disableClose: true,
      data: luggage,
      autoFocus: false,
    });
  }

  openCreateDialog(): void {
    this.dialog.open(CreateLongTermDialogComponent, {
      minWidth: '600px',
      disableClose: true,
    });
  }

  viewFiles(element: ILuggage | ICar | IAnnouncement) {
    if (element.files.length > 0) {
      this.dialog.open(ViewFilesDialogComponent, {
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
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        component: CsvExportComponent,
        width: '600px',
        disableClose: true,
        componentData: {
          tableName: 'longterm',
          columns: this.columns,
        },
      },
    });
  }
}
