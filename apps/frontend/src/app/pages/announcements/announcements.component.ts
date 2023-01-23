import { Component, OnInit } from '@angular/core';
import { CreateAnnouncementDialogComponent } from './create-announcement-dialog/create-announcement-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAnnouncementDialogComponent } from './update-announcement-dialog/update-announcement-dialog.component';

@Component({
  selector: 'frontend-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['../../../assets/styles/table.scss'],
})
export class AnnouncementsComponent {
  displayDate = new Date();
  isLoading = false;
  displayedColumns: string[] = ['title', 'comments', 'showFrom', 'showTo', 'images', 'status'];
  dataSource = ELEMENT_DATA;

  announcementColumns = ['title', 'comment', 'shownFrom', 'showTo', 'images', 'status'];

  constructor(
    private dialog: MatDialog,
  ){}

  createAnnouncement(): void{
  this.dialog.open(CreateAnnouncementDialogComponent, { width: '800px' });
  }

  editAnnouncement(): void {
    this.dialog.open(UpdateAnnouncementDialogComponent, {
      width: '800px',
    });
  }
}

export interface PeriodicElement {
  title: string;
  comments: string;
  showFrom: Date;
  showTo: Date;
  images: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'Department update',
    comments: 'Updated opening hours for each deparment',
    showFrom: new Date(0o0, 0o40),
    showTo: new Date(0o1, 0o5),
    images: 'image',
    status: 'Critical',
  },
  {
    title: 'Staff update',
    comments: 'A big welcome to all the new employees',
    showFrom: new Date(0o0, 0o16),
    showTo: new Date(0o0, 0o24),
    images: 'image',
    status: 'Need to know',
  },
  {
    title: 'Tour De France update',
    comments: 'A guide on how the race affect the hotel',
    showFrom: new Date(0o6, 0o2),
    showTo: new Date(0o6, 0o30),
    images: 'image',
    status: 'Nice to know',
  },
];