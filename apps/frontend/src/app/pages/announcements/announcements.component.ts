import { Component } from '@angular/core';
import { CreateAnnouncementDialogComponent } from './create-announcement-dialog/create-announcement-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAnnouncementDialogComponent } from './update-announcement-dialog/update-announcement-dialog.component';
import { IAnnouncement, AnnouncementStatus } from '@omnihost/interfaces';
import { ManagerAccessDialogComponent } from '../../components/manager-access-dialog/manager-access-dialog.component';

@Component({
  selector: 'frontend-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['../../../assets/styles/table.scss', './announcements.component.scss'],
})
export class AnnouncementsComponent {
  displayDate = new Date();
  isLoading = false;
  displayedColumns: string[] = ['title', 'comments', 'showFrom', 'showTo', 'files', 'status'];
  displayAnnouncementList: IAnnouncement[] = [];
  showFuture = !true;
  showActive = true;
  showExpired = !true;
  announcementList: IAnnouncement[] = [];

  constructor(private dialog: MatDialog) {
    this.displayAnnouncementList = this.announcementList.filter(
      (item) => this.getStatus(item.showFrom, item.showTo) === AnnouncementStatus.ACTIVE
    );
  }

  createAnnouncement(): void {
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      data: {
        component: CreateAnnouncementDialogComponent,
        minWidth: '600px',
      },
    });
  }

  editAnnouncement(): void {
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

    if (showFrom && showTo) {
      // FUTURE
      if (showFrom.getTime() > today) {
        return AnnouncementStatus.FUTURE;
        // ACTIVE
      } else if (showFrom.getTime() <= today && showTo.getTime() > today) {
        return AnnouncementStatus.ACTIVE;
      } else {
        // EXPIRED
        return AnnouncementStatus.EXPIRED;
      }
    } else {
      return AnnouncementStatus.EXPIRED;
    }
  }

  updateList(): void {
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
      newItems.push(
        ...this.announcementList.filter(
          (item) => this.getStatus(item.showFrom, item.showTo) === AnnouncementStatus.ACTIVE
        )
      );
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
  }
}
