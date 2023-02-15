import { Component, OnInit } from '@angular/core';
import { CarSortOptions, ICar, SortOrder } from '@omnihost/interfaces';
import { CarService } from '../../../services/car.service';
import { filterByCompletedAtAndOrderResults } from '../../../utils/order.util';

@Component({
  selector: 'frontend-car-notification-widget',
  templateUrl: './car-notification-widget.component.html',
  styleUrls: ['./car-notification-widget.component.scss'],
})
export class CarNotificationWidgetComponent implements OnInit {
  carList: ICar[] = [];
  readyCarList: ICar[] = [];
  overdueCarList: ICar[] = [];
  sortBy: CarSortOptions = CarSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  showAll = false;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // Instead of display date, im just using today, since the notifications wont make sense
    // being viewed in the past.
    this.carService.getCar(new Date(), this.sortBy, this.sortOrder, this.search).subscribe({
      next: (cars) => {
        this.carList = this.carList.filter((car) => !car.completedAt);
        this.carList = filterByCompletedAtAndOrderResults(cars, false, new Date());
        this.UpdateCarListNumbers();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  UpdateCarListNumbers(): void {
    const THIRTY_MINUTES = 30 * 60 * 1000; // Convert 30 minutes to milliseconds
    const now = new Date().getTime();

    this.readyCarList = this.carList.filter((car) => {
      if (!car.pickUpTime) {
        return false;
      }
      const expirationTime = new Date(car.pickUpTime).getTime();

      // Check that the time is within 30 min        &  check that the time hasn't been passed yet
      if ( expirationTime - now < THIRTY_MINUTES && expirationTime - now > 0) {
        this.carList = this.carList.filter((listCar) => listCar.carId !== car.carId);
        return true;
      } else {
        return false;
      }
    });

    this.overdueCarList = this.carList.filter((car) => {
      if (!car.pickUpTime) {
        return false;
      }
      const expirationTime = new Date(car.pickUpTime).getTime();

      // Check that the expirationTime current time has passed
      if (expirationTime < now) {
        this.carList = this.carList.filter((listCar) => listCar.carId !== car.carId);
        return true;
      } else {
        return false;
      }
    });
  }
}
