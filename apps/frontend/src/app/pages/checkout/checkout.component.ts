import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  IAnnouncement,
  ICar,
  ILuggage,
  LuggageSortOptions,
  SortOrder,
  TableInfoOptions,
} from '@omnihost/interfaces';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { ViewImagesDialogComponent } from '../../components/view-images-dialog/view-images-dialog.component';
import { DisplayDateService } from '../../services/display-date.service';
import { LuggageService } from '../../services/luggage.service';
import { SentryService } from '../../services/sentry.service';
import { orderByCompletedStatus } from '../../utils/order.util';
import { CreateCheckoutDialogComponent } from './create-checkout-dialog/create-checkout-dialog.component';
import { UpdateCheckoutDialogComponent } from './update-checkout-dialog/update-checkout-dialog.component';

@Component({
  selector: 'frontend-checkin',
  templateUrl: './checkout.component.html',
  styleUrls: ['../../../assets/styles/table.scss'],
})
export class CheckoutComponent {
  checkoutLuggage: ILuggage[] = [];
  listNames?: string[];
  isLoading = false;
  displayDate = new Date();
  sortBy: LuggageSortOptions = LuggageSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';

  checkoutColumns = [
    'room',
    'name',
    'bags',
    'tagNr',
    'bbDown',
    'location',
    'bbLr',
    'completedAt',
    'bbOut',
    'comments',
  ];

  constructor(
    private readonly luggageService: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private displayDateService: DisplayDateService
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchLuggage();
    });
  }

  fetchLuggage(): void {
    this.isLoading = true;

    this.luggageService
      .getCheckout(this.displayDate, this.sortBy, this.sortOrder, this.search)
      .subscribe({
        next: (luggage) => {
          this.checkoutLuggage = orderByCompletedStatus(luggage);
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          SentryService.logError(error);
          this.snackBar.open(
            'Check Out data have failed to load, please reload the page.',
            'Okay',
            {
              duration: 10000,
            }
          );
        },
      });
  }

  openTableInfo(): void {
    this.dialog.open(TableInfoDialogComponent, {
      data: TableInfoOptions.CHECK_OUT,
      width: '600px',
    });
  }

  openCheckoutEditDialog(luggage: ILuggage): void {
    this.dialog.open(UpdateCheckoutDialogComponent, {
      width: '600px',
      data: luggage,
    });
  }

  openCheckoutCreateDialog(): void {
    this.dialog.open(CreateCheckoutDialogComponent, {
      width: '600px',
    });
  }

  viewFiles(element: ILuggage | ICar | IAnnouncement) {
    if (element.files.length > 0) {
      this.dialog.open(ViewImagesDialogComponent, { width: '600px', data: element });
    } else {
      this.openCheckoutEditDialog(element as ILuggage);
    }
  }
}
