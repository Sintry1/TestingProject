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

    const futureCar: ICar = {
      arrivalDate: new Date('2022-08-14T06:57:53.796Z'),
      bbDown: 'future',
      bbOut: 'future',
      bbUp: 'future',
      carId: '3074df38-2c0a-46e7-99c4-0401c0319d98',
      charged: false,
      comments: 'future',
      completedAt: undefined,
      createdAt: new Date('2022-08-14T06:57:53.796Z'),
      deliveryTime: new Date('2022-08-14T14:43:53.796Z'),
      departureDate: new Date('2022-08-14T14:43:53.796Z'),
      expirationDate: new Date('2022-08-14T19:01:53.796Z'),
      files: ['car.jpg'],
      licensePlate: 'future',
      location: 'future',
      name: 'future',
      parkingLot: 'future',
      pickUpTime: new Date(new Date().getTime() + THIRTY_MINUTES * 2),
      room: 'future',
      tagNr: 'future',
      updatedAt: new Date('2023-02-14T14:49:53.821Z'),
    };

    const readyCar: ICar = {
      arrivalDate: new Date('2022-08-14T06:57:53.796Z'),
      bbDown: 'ready',
      bbOut: 'ready',
      bbUp: 'ready',
      carId: '3074df38-2c0a-46e7-99c4-0401c0319d98',
      charged: false,
      comments: 'ready',
      completedAt: undefined,
      createdAt: new Date('2022-08-14T06:57:53.796Z'),
      deliveryTime: new Date('2022-08-14T14:43:53.796Z'),
      departureDate: new Date('2022-08-14T14:43:53.796Z'),
      expirationDate: new Date('2022-08-14T19:01:53.796Z'),
      files: ['car.jpg'],
      licensePlate: 'ready',
      location: 'ready',
      name: 'ready',
      parkingLot: 'ready',
      pickUpTime: new Date(new Date().getTime() + (THIRTY_MINUTES - 60000)),
      room: 'ready',
      tagNr: 'ready',
      updatedAt: new Date('2023-02-14T14:49:53.821Z'),
    };

    const overdueCar: ICar = {
      arrivalDate: new Date('2022-08-14T06:57:53.796Z'),
      bbDown: 'overdue',
      bbOut: 'overdue',
      bbUp: 'overdue',
      carId: '3074df38-2c0a-46e7-99c4-0401c0319d98',
      charged: false,
      comments: 'overdue',
      completedAt: undefined,
      createdAt: new Date('2022-08-14T06:57:53.796Z'),
      deliveryTime: new Date('2022-08-14T14:43:53.796Z'),
      departureDate: new Date('2022-08-14T14:43:53.796Z'),
      expirationDate: new Date('2022-08-14T19:01:53.796Z'),
      files: ['car.jpg'],
      licensePlate: 'overdue',
      location: 'overdue',
      name: 'overdue',
      parkingLot: 'overdue',
      pickUpTime: new Date(new Date().getTime() - 180000),
      room: 'overdue',
      tagNr: 'overdue',
      updatedAt: new Date('2023-02-14T14:49:53.821Z'),
    };

    const testList: ICar[] = [futureCar, readyCar, overdueCar];

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
