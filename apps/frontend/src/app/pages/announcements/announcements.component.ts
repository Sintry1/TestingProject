import { Component, OnInit } from '@angular/core';
import { CreateAnnouncementDialogComponent } from './create-announcement-dialog/create-announcement-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAnnouncementDialogComponent } from './update-announcement-dialog/update-announcement-dialog.component';
import {
  IAnnouncement,
  AnnouncementStatus,
  AnnouncementSortOptions,
  SortOrder,
} from '@omnihost/interfaces';
import { ManagerAccessDialogComponent } from '../../components/manager-access-dialog/manager-access-dialog.component';
import { AnnouncementsService } from '../../services/announcements.service';
import { SentryService } from '../../services/sentry.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { toDateObject } from '../../utils/date.util';

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
    console.log('running');

    this.isLoading = true;
    this.announcementService.getAnnouncements(this.sortBy, this.sortOrder, this.search).subscribe({
      next: (announcements) => {
        console.log('completed', announcements);
        this.announcementList = announcements;
        this.updateList();
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        SentryService.logError(error);
        this.snackBar.open(
          'Announcement data has failed to load, please try checking your connection.',
          'Okay',
          {
            duration: 10000,
          }
        );
      },
    });
  }

  openCreateAnnouncement(): void {
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      data: {
        component: CreateAnnouncementDialogComponent,
        minWidth: '600px',
      },
    });
  }

  openEditAnnouncement(): void {
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      data: {
        component: UpdateAnnouncementDialogComponent,
        minWidth: '600px',
      },
    });
  }

  getStatus(showFrom?: Date | null, showTo?: Date | null): string {
    const today = new Date().getTime();

    if(showFrom === null || !showFrom || showTo === null || !showTo) {
      return AnnouncementStatus.EXPIRED;
    }

    const from = toDateObject(showFrom.toString())
    const to = toDateObject(showTo.toString())
    
    // FUTURE
    if (from.getTime() > today) {
      return AnnouncementStatus.FUTURE;
      // ACTIVE
    } else if (from.getTime() <= today && to.getTime() > today) {
      return AnnouncementStatus.ACTIVE;
    } else {
      // EXPIRED
      return AnnouncementStatus.EXPIRED;
    }
  }

  updateList(): void {
    this.isLoading = true;
    console.log('updating');

    this.displayAnnouncementList = [];
    const newItems = [];
    if (this.showFuture) {
      newItems.push(
        ...this.announcementList.filter(
          (item) => this.getStatus(item.showFrom, item.showTo) === AnnouncementStatus.FUTURE
        )
      );
    }
    if (this.showActive) {
      console.log('updating this thing');
      newItems.push(
        ...this.announcementList.filter((item) => {          
          this.getStatus(item.showFrom, item.showTo) === AnnouncementStatus.ACTIVE;
        })
      );
      console.log('completed this thing', newItems);
    }
    if (this.showExpired) {
      newItems.push(
        ...this.announcementList.filter(
          (item) => this.getStatus(item.showFrom, item.showTo) === AnnouncementStatus.EXPIRED
        )
      );
    }
    this.displayAnnouncementList = Array.from(
      new Set([...this.displayAnnouncementList, ...newItems])
    );

    this.isLoading = false;
  }
}
