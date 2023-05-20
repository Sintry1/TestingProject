import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BikeSortOptions, IBike, SortOrder, TableInfoOptions } from '@omnihost/interfaces';
import { CsvExportComponent } from '../../components/csv-export/csv-export.component';
import { ManagerAccessDialogComponent } from '../../components/manager-access-dialog/manager-access-dialog.component';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { BikeService } from '../../services/bikes.service';
import { DisplayDateService } from '../../services/display-date.service';
import { SentryService } from '../../services/sentry.service';
import { filterByCompletedAtAndOrderResults } from '../../utils/order.util';
import { CreateBikeDialogComponent } from './create-bike-entry-dialog/create-bike-dialog.component';
import { UpdateBikeDialogComponent } from './update-bike-entry-dialog/update-bike-dialog.component';

@Component({
  selector: 'frontend-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['../../../assets/styles/table.scss', '../../../assets/styles/checkbox.scss'],
})
export class BikesComponent {
  originalBikes: IBike[] = [];
  filteredBikes: IBike[] = [];
  completedBikes: IBike[] = [];
  incompleteBikes: IBike[] = [];
  displayDate = new Date();
  sortBy: BikeSortOptions = BikeSortOptions.PICKUP_TIME;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  isLoading = false;

  columns = [
    { fieldName: 'room', displayName: 'Room nr' },
    { fieldName: 'name', displayName: 'Name' },
    { fieldName: 'reservedBy', displayName: 'Reserved By' },
    { fieldName: 'nrOfBikes', displayName: 'Nr. of bikes' },
    { fieldName: 'pickUpTime', displayName: 'Pick up time' },
    { fieldName: 'completedAt', displayName: 'Returned' },
    { fieldName: 'comments', displayName: 'Comments' },
    { fieldName: 'bikeFormCompleted', displayName: 'Bike form completed' },
  ];

  columnHeaders = this.columns.map((field) => field.fieldName);

  constructor(
    private readonly bikeService: BikeService,
    private displayDateService: DisplayDateService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchBikes();
    });
  }

  fetchBikes(): void {
    this.isLoading = true;

    this.bikeService.getBike(this.displayDate, this.sortBy, this.sortOrder, this.search).subscribe({
      next: (bikes) => {
        this.originalBikes = bikes;
        this.filteredBikes = filterByCompletedAtAndOrderResults(
          this.originalBikes,
          false,
          this.displayDate
        );
        this.completedBikes = this.filteredBikes.filter((bike) => bike.completedAt);
        this.incompleteBikes = this.filteredBikes.filter((bike) => !bike.completedAt);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        SentryService.logError(error);
        this.snackBar.open(
          'Bike data has failed to load, please try checking your connection.',
          'Okay',
          {
            duration: 10000,
          }
        );
      },
    });
  }

  updateBikeFormCompleted(bike: IBike): void {
    this.bikeService
      .updateBike(bike.bikeId, {
        bikeFormCompleted: !bike.bikeFormCompleted,
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Bike updated!', 'Thanks', { duration: 5000 });
          bike.bikeFormCompleted = !bike.bikeFormCompleted;
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackbar.open('Failed to update, please try again.', 'Okay', {
            duration: 15000,
          });
        },
      });
  }

  openTableInfo(): void {
    this.dialog.open(TableInfoDialogComponent, {
      data: TableInfoOptions.BIKES,
      width: '600px',
      disableClose: true,
    });
  }

  openCreateDialog() {
    this.dialog.open(CreateBikeDialogComponent, { minWidth: '600px', disableClose: true });
  }

  openEditDialog(BikesEntry: IBike) {
    this.dialog.open(UpdateBikeDialogComponent, {
      width: '600px',
      disableClose: true,
      data: BikesEntry,
      autoFocus: false,
    });
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
          tableName: 'bikes',
          columns: this.columns,
        },
      },
    });
  }
}
