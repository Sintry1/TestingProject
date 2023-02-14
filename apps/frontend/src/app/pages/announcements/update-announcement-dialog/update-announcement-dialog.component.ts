import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAnnouncement } from '@omnihost/interfaces';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { AnnouncementsService } from '../../../services/announcements.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject } from '../../../utils/date.util';

@Component({
  selector: 'frontend-update-announcement-dialog',
  templateUrl: './update-announcement-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/file-upload.scss',
    '../../../../assets/styles/checkbox.scss',
  ],
})
export class UpdateAnnouncementDialogComponent {
  updateAnnouncementForm = new UntypedFormGroup({});
  isLoading = false;
  containsInvalidFiles = false;
  files: string[] = [];
  today = new Date();

  @ViewChild('fileUpload') fileUploadRef!: FileUploadComponent;
  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;
  @ViewChild('showFrom') showFromInput!: ElementRef;
  @ViewChild('showTo') showToInput!: ElementRef;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private announcementService: AnnouncementsService,
    @Inject(MAT_DIALOG_DATA) public data: IAnnouncement
  ) {
    this.files = data.files;

    this.updateAnnouncementForm = new UntypedFormGroup({
      title: new UntypedFormControl(data.title, [Validators.required]),
      showFrom: new UntypedFormControl(data.showFrom, [Validators.required]),
      showTo: new UntypedFormControl(data.showTo, [Validators.required]),
      comments: new UntypedFormControl(data.comments, [
        Validators.maxLength(1000),
        Validators.required,
      ]),
    });
  }

  onSubmit(): void {
    if (!this.updateAnnouncementForm.valid) {
      if (this.updateAnnouncementForm.get('title')?.invalid) {
        this.titleInput.nativeElement.focus();
      } else if (this.updateAnnouncementForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      } else if (this.updateAnnouncementForm.get('showFrom')?.invalid) {
        this.showFromInput.nativeElement.focus();
      } else if (this.updateAnnouncementForm.get('showTo')?.invalid) {
        this.showToInput.nativeElement.focus();
      } else if (this.containsInvalidFiles) {
        this.snackBar.open('Remove the invalid files before proceeding!', 'Okay', {
          duration: 10000,
        });
      }
    } else {
      this.updateAnnouncement();
    }
  }

  updateAnnouncement(): void {
    this.isLoading = true;

    this.announcementService
      .updateAnnouncement(this.data.announcementId, {
        title: this.updateAnnouncementForm.get('title')?.value,
        showFrom: toDateObject(this.updateAnnouncementForm.get('showFrom')?.value),
        showTo: toDateObject(this.updateAnnouncementForm.get('showTo')?.value),
        comments: this.updateAnnouncementForm.get('comments')?.value,
      })
      .subscribe({
        next: (res) => {
          // upload files
          this.fileUploadRef.submit(res.announcementId);
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to update announcement, please try again.', 'Okay', {
            duration: 10000,
          });
          this.isLoading = false;
        },
      });
  }

  /**
   * Handle finished file upload.
   */
  finalizeSubmission($event: 'success' | 'fail') {
    if ($event === 'success') {
      this.snackBar.open('Announcement updated!', 'Thanks', {
        duration: 5000,
      });
      this.dialog.closeAll();
      this.isLoading = false;
      document.location.reload();
    } else {
      this.snackBar.open('Failed to update the files, please try again.', 'Okay', {
        duration: 10000,
      });
      this.isLoading = false;
    }
  }

  updateFilesStatus($event: boolean) {
    this.containsInvalidFiles = $event;
  }
}
