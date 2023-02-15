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
  styleUrls: ['../../../assets/styles/table.scss', '../../../assets/styles/checkbox.scss'],
})
export class CarsComponent {
  filteredCarList: ICar[] = [];
  originalCarList: ICar[] = [];
  displayDate = new Date();
  sortBy: CarSortOptions = CarSortOptions.CREATED_AT;
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
    'bbUp',
    'location',
    'parkingLot',
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
    });
  }

  openCreateCarDialog() {
    this.dialog.open(CreateCarDialogComponent, { width: '600px' });
  }

  openDialogEdit(carListEntry: ICar) {
    this.dialog.open(UpdateCarDialogComponent, {
      width: '600px',
      data: carListEntry,
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
          'Check Out data have failed to load, please try checking your connection.',
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

  viewFiles(element: ILuggage | ICar | IAnnouncement) {
    if (element.files.length > 0) {
      this.dialog.open(ViewImagesDialogComponent, { width: '600px', data: element });
    } else {
      this.openDialogEdit(element as ICar);
    }
  }
}
