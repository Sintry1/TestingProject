import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BikeSortOptions, IBike, SortOrder, TableInfoOptions } from '@omnihost/interfaces';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { BikeService } from '../../services/bikes.service';
import { DisplayDateService } from '../../services/display-date.service';
import { SentryService } from '../../services/sentry.service';
import { filterByCompletedAtAndOrderResults } from '../../utils/order.util';
import { CreateBikeDialogComponent } from './create-bike-entry-dialog/create-bike-dialog.component';
import { UpdateBikeDialogComponent } from './update-bike-entry-dialog/update-bike-dialog.component';
import { CsvExportComponent } from '../../components/csv-export/csv-export.component';
import { downloadCsv } from '../../utils/export.util';
import { toExportFilenameString } from '../../utils/date.util';

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
  sortBy: BikeSortOptions = BikeSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  isLoading = false;

  bikeColumns = [
    'room',
    'name',
    'reservedBy',
    'nrOfBikes',
    'pickUpTime',
    'completedAt',
    'comments',
    'bikeFormCompleted',
  ];

  bikeHeaders = [
    'Created At',
    'Last Updated At',
    'Completed At',
    'Nr. of bikes',
    'Pick up time',
    'Name',
    'Room nr.',
    'Reserved by',
    'Bike form completed',
    'Comments',
    'BB Out',
    'BB In',
    'Time out',
    'Time in',
  ];
  exportFilename = 'bikes-data';
  unwantedExportFields = ['bikeId'];

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
          'Bike data has failed to load, please check your connection and reload the page.',
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
    this.dialog.open(CsvExportComponent, {
      width: '600px',
      disableClose: true,
      data: {
        export: (from?: string, to?: string) => {
          this.bikeService.getBikesWithinRange(from, to).subscribe({
            next: (bikes) => {
              this.snackbar.open('Exporting Bike data...', 'Thanks', { duration: 5000 });
              downloadCsv(
                bikes,
                this.bikeHeaders,
                this.unwantedExportFields,
                `${this.exportFilename}${
                  from ? '-from-' + toExportFilenameString(new Date(from)) : ''
                }${to ? '-to-' + toExportFilenameString(new Date(to)) : ''}`
              );
            },
            error: (error: HttpErrorResponse) => {
              SentryService.logError(error);
              this.snackbar.open('Failed to export the data, please try again.', 'Okay', {
                duration: 15000,
              });
            },
          });
        },
      },
    });
  }
}
