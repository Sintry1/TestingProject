import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'frontend-update-annoucement-dialog',
  templateUrl: './update-announcement-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss', '../announcements.component.scss'],
})
export class UpdateAnnouncementDialogComponent {
  updateAnnouncementForm = new UntypedFormGroup({});
  isLoading = false;

  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('comments') commentInput!: ElementRef;
  @ViewChild('showFrom') showFromInput!: ElementRef;
  @ViewChild('showTo') showToInput!: ElementRef;
  @ViewChild('showFor') showForInput!: ElementRef;
  @ViewChild('images') images!: ElementRef;

  constructor(private dialog: MatDialog) {}
}
