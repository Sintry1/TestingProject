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
import { CsvExportComponent } from '../../components/csv-export/csv-export.component';
import { ManagerAccessDialogComponent } from '../../components/manager-access-dialog/manager-access-dialog.component';
import { TableInfoDialogComponent } from '../../components/table-info-dialog/table-info-dialog.component';
import { ViewFilesDialogComponent } from '../../components/view-files-dialog/view-files-dialog.component';
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
  completeCheckouts: ILuggage[] = [];
  incompleteCheckouts: ILuggage[] = [];
  listNames?: string[];
  isLoading = false;
  displayDate = new Date();
  sortBy: LuggageSortOptions = LuggageSortOptions.ROOM;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';

  columns = [
    { fieldName: 'name', displayName: 'Name' },
    { fieldName: 'room', displayName: 'Room Nr' },
    { fieldName: 'bags', displayName: 'Nr. of bags' },
    { fieldName: 'tagNr', displayName: 'Tag nr' },
    { fieldName: 'location', displayName: 'Location' },
    { fieldName: 'bbLr', displayName: 'BB in LR' },
    { fieldName: 'completedAt', displayName: 'Time out' },
    { fieldName: 'bbOut', displayName: 'BB out' },
    { fieldName: 'comments', displayName: 'Comments' },
  ];

  columnHeaders = this.columns.map((field) => field.fieldName);

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
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        component: CsvExportComponent,
        width: '600px',
        disableClose: true,
        componentData: {
          tableName: 'checkout',
          columns: this.columns,
        },
      },
    });
  }
}
