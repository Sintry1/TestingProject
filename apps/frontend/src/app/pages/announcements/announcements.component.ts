import { Component } from '@angular/core';

export interface PeriodicElement {
  title: string;
  comments: string;
  showFrom: Date;
  shownTo: Date;
  images: string;
  status: string;
}

const today = new Date()
const twoDays = new Date(today)
const threeDays = new Date(today)
const minusOneDay = new Date(today)
const minusTwoDays = new Date(today)
minusTwoDays.setDate(minusTwoDays.getDate() - 2)
minusOneDay.setDate(minusOneDay.getDate() - 1)
twoDays.setDate(twoDays.getDate() + 2)
threeDays.setDate(threeDays.getDate() + 3)

const ELEMENT_DATA: PeriodicElement[] = [
  // Expired yesterday (expired)
  {
    title: 'Department update (past)',
    comments: 'Updated opening hours for each department',
    showFrom: minusTwoDays,
    shownTo: minusOneDay,
    images: 'image',
    status: 'Critical',
  },
  // Currently shown (active)
  {
    title: 'Department update',
    comments: 'Updated opening hours for each department',
    showFrom: today,
    shownTo: twoDays,
    images: 'image',
    status: 'Critical',
  },
  // Currently shown (active)
  {
    title: 'Staff update',
    comments: 'A big welcome to all the new employees',
    showFrom: today,
    shownTo: threeDays,
    images: 'image',
    status: 'Need to know',
  },
  // Active in two days (future)
  {
    title: 'Tour De France update',
    comments: 'A guide on how the race affect the hotel',
    showFrom: twoDays,
    shownTo: threeDays,
    images: 'image',
    status: 'Nice to know',
  },
];

@Component({
  selector: 'frontend-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['../../../assets/styles/table.scss'],
})
export class AnnouncementsComponent {
  displayDate = new Date();
  isLoading = false;
  displayedColumns: string[] = ['title', 'comments', 'showFrom', 'shownTo', 'images', 'status'];
  dataSource = ELEMENT_DATA;

  announcementColumns = ['title', 'comment', 'shownFrom', 'shownTo', 'images', 'status'];
}
