import { Component, OnInit } from '@angular/core';
import { ILuggage, LuggageSortOptions, SortOrder } from '@omnihost/interfaces';
import { LuggageService } from '../../../services/luggage.service';
import { filterByCompletedAtAndOrderResults } from '../../../utils/order.util';

@Component({
  selector: 'frontend-checkin-checkout-notification-widget',
  templateUrl: './checkin-checkout-notification-widget.component.html',
  styleUrls: ['./checkin-checkout-notification-widget.component.scss'],
})
export class CheckinCheckoutNotificationWidgetComponent implements OnInit {
  originalCheckinList: ILuggage[] = [];
  nonCompletedCheckinList: ILuggage[] = [];
  originalCheckoutList: ILuggage[] = [];
  nonCompletedCheckoutList: ILuggage[] = [];
  sortBy: LuggageSortOptions = LuggageSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  timeTil21 = new Date(new Date().setHours(21, 0));

  constructor(private luggageService: LuggageService) {}

  ngOnInit(): void {
    this.fetchLuggages();
  }

  fetchLuggages(): void {
    this.luggageService.getCheckin(new Date(), this.sortBy, this.sortOrder, this.search).subscribe({
      next: (luggages) => {
        this.originalCheckinList = filterByCompletedAtAndOrderResults(luggages, false, new Date());
        this.nonCompletedCheckinList = this.originalCheckinList.filter(
          (luggage) => !luggage.completedAt
        );
      },
      error: (err) => {
        console.error(err);
      },
    });
    this.luggageService
      .getCheckout(new Date(), this.sortBy, this.sortOrder, this.search)
      .subscribe({
        next: (luggages) => {
          this.originalCheckoutList = filterByCompletedAtAndOrderResults(
            luggages,
            false,
            new Date()
          );
          this.nonCompletedCheckoutList = this.originalCheckoutList.filter(
            (luggage) => !luggage.completedAt
          );
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
