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
import { ManagerAccessDialogComponent } from '../../components/manager-access-dialog/manager-access-dialog.component';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { ViewFilesDialogComponent } from '../../components/view-files-dialog/view-files-dialog.component';
import { CarService } from '../../services/car.service';
import { DisplayDateService } from '../../services/display-date.service';
import { SentryService } from '../../services/sentry.service';
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

  columns = [
    { fieldName: 'room', displayName: 'Room nr' },
    { fieldName: 'tagNr', displayName: 'Tag nr' },
    { fieldName: 'arrivalDate', displayName: 'Arr.' },
    { fieldName: 'departureDate', displayName: 'Dep.' },
    { fieldName: 'name', displayName: 'Name' },
    { fieldName: 'licensePlate', displayName: 'License plate' },
    { fieldName: 'expirationDate', displayName: 'Park exp.' },
    { fieldName: 'pickUpTime', displayName: 'Pick up time' },
    { fieldName: 'bbDown', displayName: 'BB Down' },
    { fieldName: 'location', displayName: 'Location' },
    { fieldName: 'parkingLot', displayName: 'Lot' },
    { fieldName: 'bbUp', displayName: 'BB up' },
    { fieldName: 'deliveryTime', displayName: 'Delivery time' },
    { fieldName: 'bbOut', displayName: 'BB Out' },
    { fieldName: 'comments', displayName: 'Comments' },
    { fieldName: 'charged', displayName: 'Charged' },
  ];

  columnHeaders = this.columns.map((field) => field.fieldName);
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
          false,
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
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        component: CsvExportComponent,
        width: '600px',
        disableClose: true,
        componentData: {
          tableName: 'cars',
          columns: this.columns,
        },
      },
    });
  }
}
