import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  CarSortOptions,
  IAnnouncement,
  ICar,
  ILuggage,
  SortOrder,
  TableInfoOptions,
} from '@omnihost/interfaces';
import { CsvExportComponent } from '../../components/csv-export/csv-export.component';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { ViewFilesDialogComponent } from '../../components/view-files-dialog/view-files-dialog.component';
import { CarService } from '../../services/car.service';
import { DisplayDateService } from '../../services/display-date.service';
import { SentryService } from '../../services/sentry.service';
import { toExportFilenameString } from '../../utils/date.util';
import { downloadCsv } from '../../utils/export.util';
import { filterByCompletedAtAndOrderResults } from '../../utils/order.util';
import { CreateCarDialogComponent } from './create-car-entry-dialog/create-car-dialog.component';
import { UpdateCarDialogComponent } from './update-car-entry-dialog/update-car-dialog.component';

@Component({
  selector: 'frontend-cars',
  templateUrl: './cars.component.html',
  styleUrls: [
    '../../../assets/styles/table.scss',
    '../../../assets/styles/checkbox.scss',
    './cars.component.scss',
  ],
})
export class CarsComponent {
  filteredCars: ICar[] = [];
  originalCars: ICar[] = [];
  completedCars: ICar[] = [];
  incompleteCars: ICar[] = [];
  displayDate = new Date();
  sortBy: CarSortOptions = CarSortOptions.PICKUP_TIME;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  showAll = false;
  isLoading = false;

  carColumns = [
    'room',
    'tagNr',
    'arrivalDate',
    'departureDate',
    'name',
    'licensePlate',
    'expirationDateTime',
    'pickUpDateTime',
    'bbDown',
    'location',
    'parkingLot',
    'bbUp',
    'deliveryDateTime',
    'bbOut',
    'comments',
    'charged',
  ];

  carHeaders = [
    'Created At',
    'Last Updated At',
    'Completed At',
    'Tag nr',
    'Room nr.',
    'Arrival Date',
    'Departure Date',
    'Name',
    'License plate',
    'Park expiration',
    'Pick up time',
    'Delivery time',
    'BB Down',
    'BB Up',
    'Location',
    'Parking lot',
    'BB Out',
    'Comments',
    'Charged',
    'Files',
  ];
  exportFilename = 'cars-data';
  unwantedExportFields = ['carId'];

  constructor(
    private readonly carService: CarService,
    private displayDateService: DisplayDateService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchCars();
    });
  }

  updateCharge(carId: string, charged: boolean): void {
    this.carService
      .updateCar(carId, {
        charged: !charged,
      })
      .subscribe({
        next: () => {
          this.snackBar.open('Car updated!', 'Thanks', { duration: 5000 });
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to update, please try again.', 'Okay', {
            duration: 15000,
          });
        },
      });
  }

  openTableInfo(): void {
    this.dialog.open(TableInfoDialogComponent, {
      data: TableInfoOptions.CARS,
      width: '600px',
      disableClose: true,
    });
  }

  openCreateDialog() {
    this.dialog.open(CreateCarDialogComponent, { minWidth: '600px', disableClose: true });
  }

  openEditDialog(CarsEntry: ICar) {
    this.dialog.open(UpdateCarDialogComponent, {
      minWidth: '600px',
      disableClose: true,
      data: CarsEntry,
      autoFocus: false,
    });
  }

  fetchCars(): void {
    this.isLoading = true;

    this.carService.getCar(this.displayDate, this.sortBy, this.sortOrder, this.search).subscribe({
      next: (cars) => {
        this.originalCars = cars;
        this.filteredCars = filterByCompletedAtAndOrderResults(
          this.originalCars,
          this.showAll,
          this.displayDate
          // Need to filter another list to filter out the completed orders and place them in completedCars
        );
        this.incompleteCars = this.filteredCars.filter((car) => !car.deliveryTime);
        this.completedCars = this.filteredCars.filter((car) => car.deliveryTime);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        SentryService.logError(error);
        this.snackBar.open(
          'Car data have failed to load, please try checking your connection.',
          'Okay',
          {
            duration: 10000,
          }
        );
      },
    });
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
    this.filteredCars = filterByCompletedAtAndOrderResults(
      this.originalCars,
      this.showAll,
      this.displayDate
    );
  }

  isReady(pickupTime: string): boolean {
    const pickupTimeDate = new Date(pickupTime);
    const currentTime = new Date();
    const diffInMs = pickupTimeDate.getTime() - currentTime.getTime();

    return diffInMs >= 0 && diffInMs <= 30 * 60 * 1000; // Check if pickup time is between 0 seconds and 30 minutes from current time
  }

  isOverdue(pickupTime: string): boolean {
    if (pickupTime) {
      const pickupTimeDate = new Date(pickupTime);
      return pickupTimeDate.getTime() < new Date().getTime();
    } else {
      return false;
    }
  }

  viewFiles(element: ILuggage | ICar | IAnnouncement) {
    if (element.files.length > 0) {
      this.dialog.open(ViewFilesDialogComponent, {
        width: '600px',
        disableClose: true,
        data: element,
      });
    } else {
      this.openEditDialog(element as ICar);
    }
  }

  openCsvExportDialog() {
    this.dialog.open(CsvExportComponent, {
      width: '600px',
      disableClose: true,
      data: {
        export: (from?: string, to?: string) => {
          this.carService.getCarsWithinRange(from, to).subscribe({
            next: (cars) => {
              this.snackBar.open('Exporting Cars data...', 'Thanks', { duration: 5000 });
              downloadCsv(
                cars,
                this.carHeaders,
                this.unwantedExportFields,
                `${this.exportFilename}${
                  from ? '-from-' + toExportFilenameString(new Date(from)) : ''
                }${to ? '-to-' + toExportFilenameString(new Date(to)) : ''}`
              );
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
