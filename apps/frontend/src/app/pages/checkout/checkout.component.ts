import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  IAnnouncement,
  ICar,
  ILuggage,
  LuggageSortOptions,
  LuggageType,
  SortOrder,
  TableInfoOptions,
} from '@omnihost/interfaces';
import { CsvExportComponent } from '../../components/csv-export/csv-export.component';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { ViewFilesDialogComponent } from '../../components/view-files-dialog/view-files-dialog.component';
import { DisplayDateService } from '../../services/display-date.service';
import { LuggageService } from '../../services/luggage.service';
import { SentryService } from '../../services/sentry.service';
import { toExportFilenameString } from '../../utils/date.util';
import { downloadCsv } from '../../utils/export.util';
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
  completeCheckouts: ILuggage[] = [];
  incompleteCheckouts: ILuggage[] = [];
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

  luggageHeaders = [
    'Created At',
    'Last Updated At',
    'Completed At',
    'Room nr.',
    'Name',
    'Time of arrival',
    'Nr. of bags',
    'Comments',
    'Tag nr',
    'Location',
    'BB Down',
    'BB in LR',
    'BB Up',
    'Time in room',
    'Files',
  ];
  exportFilename = 'luggages-checkout-data';
  unwantedExportFields = ['roomReady', 'luggageType', 'luggageId'];

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
          this.completeCheckouts = this.checkoutLuggage.filter((luggage) => luggage.completedAt);
          this.incompleteCheckouts = this.checkoutLuggage.filter((luggage) => !luggage.completedAt);
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
      disableClose: true,
    });
  }

  openEditDialog(luggage: ILuggage): void {
    this.dialog.open(UpdateCheckoutDialogComponent, {
      minWidth: '600px',
      disableClose: true,
      data: luggage,
      autoFocus: false,
    });
  }

  openCreateDialog(): void {
    this.dialog.open(CreateCheckoutDialogComponent, {
      minWidth: '600px',
      disableClose: true,
    });
  }

  viewFiles(element: ILuggage | ICar | IAnnouncement) {
    if (element.files.length > 0) {
      this.dialog.open(ViewFilesDialogComponent, {
        width: '600px',
        disableClose: true,
        data: element,
        autoFocus: false,
      });
    } else {
      this.openEditDialog(element as ILuggage);
    }
  }

  openCsvExportDialog() {
    this.dialog.open(CsvExportComponent, {
      width: '600px',
      disableClose: true,
      data: {
        export: (from?: string, to?: string) => {
          this.luggageService.getLuggagesWithinRange(LuggageType.CHECKOUT, from, to).subscribe({
            next: (luggages) => {
              this.snackBar.open('Exporting Luggage Checkout data...', 'Thanks', {
                duration: 5000,
              });
              downloadCsv(
                luggages,
                this.luggageHeaders,
                this.unwantedExportFields,
                `${this.exportFilename}${
                  from ? '-from-' + toExportFilenameString(new Date(from)) : ''
                }${to ? '-to-' + toExportFilenameString(new Date(to)) : ''}`
              );
            },
            error: (error: HttpErrorResponse) => {
              SentryService.logError(error);
              this.snackBar.open('Failed to export the data, please try again.', 'Okay', {
                duration: 15000,
              });
            },
          });
        },
      },
    });
  }
}
