import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { AnnouncementsService } from '../../../services/announcements.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject } from '../../../utils/date.util';

@Component({
  selector: 'frontend-create-announcement-dialog',
  templateUrl: './create-announcement-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/file-upload.scss',
    '../../../../assets/styles/checkbox.scss',
  ],
})
export class CreateAnnouncementDialogComponent {
  createAnnouncementForm = new UntypedFormGroup({});
  isLoading = false;
  containsInvalidFiles = false;
  today = new Date();

  @ViewChild('fileUpload') fileUploadRef!: FileUploadComponent;
  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;
  @ViewChild('showFrom') showFromInput!: ElementRef;
  @ViewChild('showTo') showToInput!: ElementRef;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private announcementService: AnnouncementsService
  ) {
    this.createAnnouncementForm = new UntypedFormGroup({
      title: new UntypedFormControl('', [Validators.required]),
      showFrom: new UntypedFormControl('', [Validators.required]),
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
      } else if (this.containsInvalidFiles) {
        this.snackBar.open('Remove the invalid files before proceeding!', 'Okay', {
          duration: 10000,
        });
      }
    } else {
      this.createAnnouncement();
    }
  }

  createAnnouncement(): void {
    this.isLoading = true;

    this.announcementService
      .createAnnouncement({
        title: this.createAnnouncementForm.get('title')?.value,
        showFrom: toDateObject(this.createAnnouncementForm.get('showFrom')?.value),
        showTo: toDateObject(this.createAnnouncementForm.get('showTo')?.value),
        comments: this.createAnnouncementForm.get('comments')?.value,
      })
      .subscribe({
        next: (res) => {
          // upload files
          this.fileUploadRef.submit(res.announcementId);
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to create announcement, please try again.', 'Okay', {
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
      this.snackBar.open('Announcement item created!', 'Thanks', {
        duration: 5000,
      });
      this.dialog.closeAll();
      this.isLoading = false;
      document.location.reload();
    } else {
      this.snackBar.open('Failed to upload the files, please try again.', 'Okay', {
        duration: 10000,
      });
      this.isLoading = false;
    }
  }

  updateFilesStatus($event: boolean) {
    this.containsInvalidFiles = $event;
  }
}
