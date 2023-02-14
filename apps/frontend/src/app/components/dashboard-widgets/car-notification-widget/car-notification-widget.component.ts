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
  displayDate = new Date();
  sortBy: CarSortOptions = CarSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  showAll = false;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCar(this.displayDate, this.sortBy, this.sortOrder, this.search).subscribe({
      next: (cars) => {
        this.carList = filterByCompletedAtAndOrderResults(
          cars,
          false,
          this.displayDate
        );
        this.carList = this.carList.filter((car) => !car.completedAt)
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
