import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AnnouncementSortOptions,
  AnnouncementStatus,
  IAnnouncement,
  ICar,
  ILuggage,
  SortOrder,
} from '@omnihost/interfaces';
import { ManagerAccessDialogComponent } from '../../components/manager-access-dialog/manager-access-dialog.component';
import { ViewImagesDialogComponent } from '../../components/view-images-dialog/view-images-dialog.component';
import { AnnouncementsService } from '../../services/announcements.service';
import { SentryService } from '../../services/sentry.service';
import { toDateObject } from '../../utils/date.util';
import { CreateAnnouncementDialogComponent } from './create-announcement-dialog/create-announcement-dialog.component';
import { UpdateAnnouncementDialogComponent } from './update-announcement-dialog/update-announcement-dialog.component';

@Component({
  selector: 'frontend-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['../../../assets/styles/table.scss', './announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  isLoading = false;
  displayedColumns: string[] = ['title', 'comments', 'showFrom', 'showTo', 'files', 'status'];
  displayAnnouncementList: IAnnouncement[] = [];
  showFuture = false;
  showActive = true;
  showExpired = false;
  sortBy: AnnouncementSortOptions = AnnouncementSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  announcementList: IAnnouncement[] = [];

  constructor(
    private dialog: MatDialog,
    private announcementService: AnnouncementsService,
    private snackBar: MatSnackBar
  ) {
    this.displayAnnouncementList = this.announcementList.filter(
      (item) => this.getStatus(item.showFrom, item.showTo) === AnnouncementStatus.ACTIVE
    );
  }

  ngOnInit(): void {
    this.fetchAnnouncements();
  }

  fetchAnnouncements(): void {
    this.isLoading = true;
    this.announcementService.getAnnouncements(this.sortBy, this.sortOrder, this.search).subscribe({
      next: (announcements) => {
        this.announcementList = announcements;
        this.updateList();
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        SentryService.logError(error);
        this.snackBar.open(
          'Announcements have failed to load, please check your connection and reload the page.',
          'Okay',
          {
            duration: 10000,
          }
        );
      },
    });
  }

  openCreateDialog(): void {
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        component: CreateAnnouncementDialogComponent,
        minWidth: '600px',
        disableClose: true,
      },
    });
  }

  openEditDialog(announcement: IAnnouncement): void {
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        component: UpdateAnnouncementDialogComponent,
        minWidth: '600px',
        disableClose: true,
        componentData: announcement,
      },
    });
  }

  getStatus(showFrom?: Date | null, showTo?: Date | null): string {
    const today = new Date().getTime();

    if (showFrom === null || !showFrom || showTo === null || !showTo) {
      return AnnouncementStatus.EXPIRED;
    }

    const from = toDateObject(showFrom.toString());
    const to = toDateObject(showTo.toString());

    if (from.getTime() > today) {
      // FUTURE
      return AnnouncementStatus.FUTURE;
    } else if (from.getTime() <= today && to.getTime() > today) {
      // ACTIVE
      return AnnouncementStatus.ACTIVE;
    } else {
      // EXPIRED
      return AnnouncementStatus.EXPIRED;
    }
  }

  updateList(): void {
    this.isLoading = true;

    this.displayAnnouncementList = [];
    const newItems = [];
    if (this.showFuture) {
      newItems.push(
        ...this.announcementList.filter((item) => {
          return this.getStatus(item.showFrom, item.showTo) === AnnouncementStatus.FUTURE;
        })
      );
    }
    if (this.showActive) {
      newItems.push(
        ...this.announcementList.filter((item) => {
          return this.getStatus(item.showFrom, item.showTo) === AnnouncementStatus.ACTIVE;
        })
      );
    }
    if (this.showExpired) {
      newItems.push(
        ...this.announcementList.filter((item) => {
          return this.getStatus(item.showFrom, item.showTo) === AnnouncementStatus.EXPIRED;
        })
      );
    }
    this.displayAnnouncementList = Array.from(
      new Set([...this.displayAnnouncementList, ...newItems])
    );

    this.isLoading = false;
  }

  viewFiles(element: ILuggage | ICar | IAnnouncement) {
    if (element.files.length > 0) {
      this.dialog.open(ViewImagesDialogComponent, {
        width: '600px',
        disableClose: true,
        data: element,
      });
    }
  }
}
