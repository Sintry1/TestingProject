import { Component, OnInit } from '@angular/core';
import { CarSortOptions, ICar, SortOrder } from '@omnihost/interfaces';
import { CarService } from '../../../services/car.service';
import { toDateObject } from '../../../utils/date.util';
import { filterByCompletedAtAndOrderResults } from '../../../utils/order.util';

@Component({
  selector: 'frontend-car-notification-widget',
  templateUrl: './car-notification-widget.component.html',
  styleUrls: ['./car-notification-widget.component.scss'],
})
export class CarNotificationWidgetComponent implements OnInit {
  carList: ICar[] = [];
  readyCarList: ICar[] = [];
  overdueCarList: ICar[] = []
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
        this.carList = filterByCompletedAtAndOrderResults(
          cars,
          false,
          new Date()
        );
        this.carList = this.carList.filter((car) => !car.completedAt)
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
