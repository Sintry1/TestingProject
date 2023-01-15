import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  BikeSortOptions,
  IBike,
  SortOrder,
  TableInfoOptions,
} from '@omnihost/interfaces';
import { TableInfoDialogComponent } from '../../components/tableInfoDialog/table-info-dialog.component';
import { BikeService } from '../../services/bikes.service';
import { DisplayDateService } from '../../services/display-date.service';
import { filterByCompletedAtAndOrderResults } from '../../utils/order.util';
import { CreateBikeDialogComponent } from './createBikeEntryDialog/create-bike-dialog.component';
import { UpdateBikeDialogComponent } from './updateBikeEntryDialog/update-bike-dialog.component';

@Component({
  selector: 'frontend-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: [
    '../../../assets/styles/table.scss',
    '../../../assets/styles/checkbox.scss',
  ],
})
export class BikesComponent implements OnInit {
  originalBikeList: IBike[] = [];
  filteredBikeList: IBike[] = [];
  displayDate = new Date();
  sortBy: BikeSortOptions = BikeSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';

  bikeColumns = [
    'room',
    'name',
    'reservedBy',
    'nrOfBikes',
    'pickUpTime',
    'completedAt',
    'comments',
    'bikeFormCompleted',
  ];

  constructor(
    private readonly bikeService: BikeService,
    private displayDateService: DisplayDateService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.displayDateService.getDisplayDateSubject().subscribe((date) => {
      this.displayDate = new Date(date);
      this.fetchBikeList();
    });
  }

  ngOnInit(): void {
    this.fetchBikeList();
  }

  fetchBikeList(): void {
    this.bikeService
      .getBike(this.displayDate, this.sortBy, this.sortOrder, this.search)
      .subscribe({
        next: (bikes) => {
          this.originalBikeList = bikes;
          this.filteredBikeList = filterByCompletedAtAndOrderResults(
            this.originalBikeList,
            false,
            this.displayDate
          );
        },
        error: (error) => {
          console.error(error);
          this.snackBar.open(
            'Bike data has failed to load, please try checking your connection.',
            'Okay',
            {
              duration: 10000,
            }
          );
        },
      });
  }

  updateBikeFormCompleted(bikeId: string, bikeFormCompleted: boolean): void {
    this.bikeService
      .updateBike(bikeId, {
        bikeFormCompleted: !bikeFormCompleted,
      })
      .subscribe({
        next: () => {
          this.snackbar.open('Bike updated!', 'Thanks', { duration: 5000 });
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.snackbar.open('Failed to update, please try again.', 'Okay', {
            duration: 15000,
          });
        },
      });
  }

  openTableInfo(): void {
    this.dialog.open(TableInfoDialogComponent, {
      data: TableInfoOptions.BIKES,
      width: '600px',
    });
  }

  openCreateBikeDialog() {
    this.dialog.open(CreateBikeDialogComponent, { width: '600px' });
  }

  openDialogEdit(bikeListEntry: IBike) {
    this.dialog.open(UpdateBikeDialogComponent, {
      width: '600px',
      data: bikeListEntry,
    });
  }
}
