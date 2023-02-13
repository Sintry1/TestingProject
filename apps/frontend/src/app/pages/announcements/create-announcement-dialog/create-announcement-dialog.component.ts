import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { toDatetimeInputString } from '../../../utils/date.util';

@Component({
  selector: 'frontend-create-announcement-dialog',
  templateUrl: './create-announcement-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss', '../announcements.component.scss'],
})
export class CreateAnnouncementDialogComponent implements OnInit {
  createAnnouncementForm = new UntypedFormGroup({});
  isLoading = false;

  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;
  @ViewChild('showFrom') showFromInput!: ElementRef;
  @ViewChild('showTo') showToInput!: ElementRef;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.createAnnouncementForm = new UntypedFormGroup({
      title: new UntypedFormControl('', [Validators.required]),
      showFrom: new UntypedFormControl(new Date(), [Validators.required]),
      showTo: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', [Validators.maxLength(1000), Validators.required]),
    });
  }

  onSubmit(): void {
    if (!this.createAnnouncementForm.valid) {
      if (this.createAnnouncementForm.get('title')?.invalid) {
        this.titleInput.nativeElement.focus();
      } else if (this.createAnnouncementForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      } else if (this.createAnnouncementForm.get('showFrom')?.invalid) {
        this.showFromInput.nativeElement.focus();
      } else if (this.createAnnouncementForm.get('showTo')?.invalid) {
        this.showToInput.nativeElement.focus();
      }
      // TODO: Add a check for files
    } else {
      this.createAnnouncement();
    }
  }

  createAnnouncement(): void {
    this.isLoading = true;
  }
}
