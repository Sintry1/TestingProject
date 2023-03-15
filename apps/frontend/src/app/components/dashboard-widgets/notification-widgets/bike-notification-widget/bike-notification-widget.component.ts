import { Component, OnInit } from '@angular/core';
import { BikeSortOptions, IBike, SortOrder } from '@omnihost/interfaces';
import { BikeService } from '../../../../services/bikes.service';
import { filterByCompletedAtAndOrderResults } from '../../../../utils/order.util';

@Component({
  selector: 'frontend-bike-notification-widget',
  templateUrl: './bike-notification-widget.component.html',
  styleUrls: ['../../../../../assets/styles/notification-widget.scss'],
})
export class BikeNotificationWidgetComponent implements OnInit {
  originalBikeList: IBike[] = [];
  futureBikeList: IBike[] = [];
  readyBikeList: IBike[] = [];
  overdueBikeList: IBike[] = [];
  sortBy: BikeSortOptions = BikeSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  showAll = false;
  nextPickUp: Date | undefined = undefined;
  timeTillPickup = new Date();

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    // Instead of display date, im just using today, since the notifications wont make sense being viewed in the past.
    this.bikeService.getBike(new Date(), this.sortBy, this.sortOrder, this.search).subscribe({
      next: (bikes) => {
        this.originalBikeList = filterByCompletedAtAndOrderResults(bikes, false, new Date());
        this.originalBikeList = this.originalBikeList.filter((bike) => !bike.completedAt);
        this.futureBikeList = this.originalBikeList;
        this.UpdateBikeListNumbers();
        this.getOldest();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  getOldest(): void {
    let oldestBike = this.originalBikeList[0];

    for (const bike of this.originalBikeList) {
      if (bike.pickUpTime && oldestBike.pickUpTime) {
        if (bike.pickUpTime < oldestBike.pickUpTime) {
          oldestBike = bike;
        }
      }
    }

    if (oldestBike.pickUpTime) {
      this.nextPickUp = oldestBike.pickUpTime;
    }
  }

  UpdateBikeListNumbers(): void {
    const ONE_HOUR = 60 * 60 * 1000; // Convert 60 minutes to milliseconds
    const now = new Date().getTime();
    this.futureBikeList = this.originalBikeList.filter((bike) => {
      if (!bike.pickUpTime) {
        return false;
      }
      const expirationTime = new Date(bike.pickUpTime).getTime();
      // Check that the time is at least 1hr in the future
      return expirationTime >= now + ONE_HOUR;
    });

    this.readyBikeList = this.originalBikeList.filter((bike) => {
      if (!bike.pickUpTime) {
        return false;
      }
      const expirationTime = new Date(bike.pickUpTime).getTime();

      // Check that the time is within 1hr & check that the time hasn't been passed yet
      return expirationTime < now + ONE_HOUR && expirationTime > now;
    });

    this.overdueBikeList = this.originalBikeList.filter((bike) => {
      if (!bike.pickUpTime) {
        return false;
      }
      const expirationTime = new Date(bike.pickUpTime).getTime();

      // Check that the expirationTime current time has passed
      return expirationTime <= now;
    });

    // Remove bikes from the future list
    this.futureBikeList = this.futureBikeList.filter((bike) => {
      return !this.readyBikeList.includes(bike) && !this.overdueBikeList.includes(bike);
    });
  }
}
