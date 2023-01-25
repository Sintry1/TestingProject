import { Component, OnInit } from '@angular/core';
import { CreateAnnouncementDialogComponent } from './create-announcement-dialog/create-announcement-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAnnouncementDialogComponent } from './update-announcement-dialog/update-announcement-dialog.component';

enum AnnouncementStatus {
  FUTURE = 'Future',
  ACTIVE = 'Active',
  EXPIRED = 'Expired',
}

@Component({
  selector: 'frontend-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['../../../assets/styles/table.scss', './announcements.component.scss'],
})
export class AnnouncementsComponent {
  displayDate = new Date();
  isLoading = false;
  displayedColumns: string[] = ['title', 'comments', 'showFrom', 'showTo', 'images', 'status'];
  displayAnnouncementList: IAnnouncement[] = [];
  showFuture = true;
  showActive = true;
  showExpired = false;
  announcementList: IAnnouncement[] = MOCK_DATA;
  

  announcementColumns = ['title', 'comment', 'showFrom', 'showTo', 'images', 'status'];

  constructor(private dialog: MatDialog) {}

  createAnnouncement(): void {
    this.dialog.open(CreateAnnouncementDialogComponent, { width: '800px' });
  }

  editAnnouncement(): void {
    this.dialog.open(UpdateAnnouncementDialogComponent, {
      width: '800px',
    });
  }

  getStatus(showFrom: Date, showTo: Date): string {
    const today = new Date();
    // FUTURE
    if (showFrom > today) {
      return AnnouncementStatus.FUTURE;
      // True if showTo is in the past (showTo < date.now())

      // ACTIVE
    } else if (showFrom <= today && showTo > today) {
      return AnnouncementStatus.ACTIVE;
    } else {

      // EXPIRED
      return AnnouncementStatus.EXPIRED;
    }
  }

  updateList(): void {
    this.displayAnnouncementList = [];
    console.log("works");

     //check to display future
     if(this.showFuture) {
      console.log("adding future");
      this.displayAnnouncementList = this.displayAnnouncementList.concat(
        this.announcementList.filter((item) => this.getStatus(item.showFrom, item.showTo) === AnnouncementStatus.FUTURE)
      );
      console.log("Future items have been added");
    }
    
    // check to display active
    if(this.showActive) {
      console.log("adding active");
      this.displayAnnouncementList = this.displayAnnouncementList.concat(
        this.announcementList.filter((item) => this.getStatus(item.showFrom, item.showTo) !== AnnouncementStatus.ACTIVE)
      );
      console.log("Active items have been added");
    }

    //check to display expired
    if(this.showExpired) {
      console.log("adding future");
      this.displayAnnouncementList = this.displayAnnouncementList.concat(
        this.announcementList.filter((item) => this.getStatus(item.showFrom, item.showTo) === AnnouncementStatus.EXPIRED)
      );
      console.log("Expired items have been added");
    }
   console.log(this.displayAnnouncementList);
   
  }
  
}

export interface IAnnouncement {
  title: string;
  comments: string;
  showFrom: Date;
  showTo: Date;
  images: string;
  status: string;
}

const today = new Date();
const twoDays = new Date(today);
const threeDays = new Date(today);
const minusOneDay = new Date(today);
const minusTwoDays = new Date(today);
minusTwoDays.setDate(minusTwoDays.getDate() - 2);
minusOneDay.setDate(minusOneDay.getDate() - 1);
twoDays.setDate(twoDays.getDate() + 2);
threeDays.setDate(threeDays.getDate() + 3);

const MOCK_DATA: IAnnouncement[] = [
  // Expired yesterday (expired)
  {
    title: 'Department update (past)',
    comments: 'Updated opening hours for each department',
    showFrom: minusTwoDays,
    showTo: minusOneDay,
    images: 'image',
    status: 'Critical',
  },
  // Currently shown (active)
  {
    title: 'Department update (active)',
    comments: 'Updated opening hours for each department',
    showFrom: today,
    showTo: twoDays,
    images: 'image',
    status: 'Critical',
  },
  // Currently shown (active)
  {
    title: 'Staff update (active)',
    comments: 'A big welcome to all the new employees',
    showFrom: today,
    showTo: threeDays,
    images: 'image',
    status: 'Need to know',
  },
  // Active in two days (future)
  {
    title: 'Tour De France update (future)',
    comments: 'A guide on how the race affect the hotel',
    showFrom: twoDays,
    showTo: threeDays,
    images: 'image',
    status: 'Nice to know',
  },
];
