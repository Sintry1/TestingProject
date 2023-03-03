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
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { ViewImagesDialogComponent } from '../../components/view-images-dialog/view-images-dialog.component';
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
  filteredCarList: ICar[] = [];
  originalCarList: ICar[] = [];
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

  constructor(
    private readonly carService: CarService,
    private displayDateService: DisplayDateService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchCarList();
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

  openEditDialog(carListEntry: ICar) {
    this.dialog.open(UpdateCarDialogComponent, {
      minWidth: '600px',
      disableClose: true,
      data: carListEntry,
      autoFocus: false,
    });
  }

  fetchCarList(): void {
    this.isLoading = true;

    this.carService.getCar(this.displayDate, this.sortBy, this.sortOrder, this.search).subscribe({
      next: (cars) => {
        this.originalCarList = cars;
        this.filteredCarList = filterByCompletedAtAndOrderResults(
          this.originalCarList,
          this.showAll,
          this.displayDate
        );
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
    this.filteredCarList = filterByCompletedAtAndOrderResults(
      this.originalCarList,
      this.showAll,
      this.displayDate
    );
  }

  isReady(pickupTime: Date): boolean {
    const currentDate = new Date();
    const diffInMs = new Date(pickupTime).getTime() - currentDate.getTime();
    const diffInMin = Math.round(diffInMs / 60000); // converting milliseconds to minutes
    return diffInMin <= 60 && pickupTime.toDateString() === currentDate.toDateString();
  }

  isOverdue(pickupTime: Date): boolean {
    return new Date(pickupTime).getTime() < new Date().getTime();
  }

  viewFiles(element: ILuggage | ICar | IAnnouncement) {
    if (element.files.length > 0) {
      this.dialog.open(ViewImagesDialogComponent, {
        width: '600px',
        disableClose: true,
        data: element,
      });
    } else {
      this.openEditDialog(element as ICar);
    }
  }
}
