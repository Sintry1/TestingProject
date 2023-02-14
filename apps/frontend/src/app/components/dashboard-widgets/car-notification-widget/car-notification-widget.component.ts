import { Component, OnInit } from '@angular/core';
import { ICar } from '@omnihost/interfaces';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'frontend-car-notification-widget',
  templateUrl: './car-notification-widget.component.html',
  styleUrls: ['./car-notification-widget.component.scss'],
})
export class CarNotificationWidgetComponent implements OnInit {
  carList: ICar[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCar(new Date()).subscribe({
      next: (cars) => {
        this.carList = cars;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
