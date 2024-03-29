import { Component, OnInit } from '@angular/core';
import { CarSortOptions, ICar, SortOrder } from '@omnihost/interfaces';
import { CarService } from '../../../../services/car.service';
import { filterByCompletedAtAndOrderResults } from '../../../../utils/order.util';

@Component({
  selector: 'frontend-car-notification-widget',
  templateUrl: './car-notification-widget.component.html',
  styleUrls: ['../../../../../assets/styles/notification-widget.scss'],
})
export class CarNotificationWidgetComponent implements OnInit {
  originalCarList: ICar[] = [];
  futureCarList: ICar[] = [];
  readyCarList: ICar[] = [];
  overdueCarList: ICar[] = [];
  sortBy: CarSortOptions = CarSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  nextPickUp: Date | undefined = undefined;
  timeTillPickup = new Date();

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // Instead of display date, im just using today, since the notifications wont make sense being viewed in the past.
    this.carService.getCar(new Date(), this.sortBy, this.sortOrder, this.search).subscribe({
      next: (cars) => {
        this.originalCarList = filterByCompletedAtAndOrderResults(cars, false, new Date());
        this.originalCarList = this.originalCarList.filter((car) => !car.completedAt);
        this.futureCarList = this.originalCarList;
        this.UpdateCarListNumbers();
        this.getOldest();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  getOldest(): void {
    if (this.originalCarList.length == 0) {
      console.warn(`There are no cars to showcase on the dashboard!`);
      return;
    }
    let oldestCar = this.originalCarList[0];

    for (const car of this.originalCarList) {
      if (car.pickUpTime && oldestCar.pickUpTime) {
        if (car.pickUpTime < oldestCar.pickUpTime) {
          oldestCar = car;
        }
      }
    }

    if (oldestCar.pickUpTime) {
      this.nextPickUp = oldestCar.pickUpTime;
    }
  }

  UpdateCarListNumbers(): void {
    const THIRTY_MINUTES = 30 * 60 * 1000; // Convert 30 minutes to milliseconds
    const now = new Date().getTime();

    this.readyCarList = this.futureCarList.filter((car) => {
      if (!car.pickUpTime) {
        return false;
      }
      const expirationTime = new Date(car.pickUpTime).getTime();

      // Check that the time is within 30 min        &  check that the time hasn't been passed yet
      if (expirationTime - now < THIRTY_MINUTES && expirationTime - now > 0) {
        // remove cars from the future list
        this.futureCarList = this.futureCarList.filter(
          (currentCar) => currentCar.carId !== car.carId
        );
        return true;
      } else {
        return false;
      }
    });

    this.overdueCarList = this.futureCarList.filter((car) => {
      if (!car.pickUpTime) {
        return false;
      }
      const expirationTime = new Date(car.pickUpTime).getTime();

      // Check that the expirationTime current time has passed
      if (expirationTime < now) {
        // remove cars from the future list
        this.futureCarList = this.futureCarList.filter((currentCar) => {
          return currentCar.carId !== car.carId;
        });

        return true;
      } else {
        return false;
      }
    });
  }
}
