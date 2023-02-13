import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { toDatetimeInputString } from '../../../utils/date.util';

@Component({
  selector: 'frontend-create-annoucement-dialog',
  templateUrl: './create-announcement-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss', '../announcements.component.scss'],
})
export class CreateAnnouncementDialogComponent implements OnInit {
  createAnnouncementForm = new UntypedFormGroup({});
  isLoading = false;

  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('comments') commentInput!: ElementRef;
  @ViewChild('showFrom') showFromInput!: ElementRef;
  @ViewChild('showTo') showToInput!: ElementRef;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.createAnnouncementForm = new UntypedFormGroup({
      title: new UntypedFormControl('', [Validators.required]),
      showFrom: new UntypedFormControl('', [Validators.required]),
      showTo: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', [Validators.maxLength(1000), Validators.required]),
    });
  }
}
