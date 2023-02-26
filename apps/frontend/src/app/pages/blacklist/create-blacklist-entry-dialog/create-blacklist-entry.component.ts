import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { AuthService } from '../../../services/auth.service';
import { BlacklistService } from '../../../services/blacklist.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toDatetimeInputString } from '../../../utils/date.util';
import { ManagerAccessDialogComponent } from '../../../components/manager-access-dialog/manager-access-dialog.component';

@Component({
  selector: 'frontend-create-blacklist-entry-dialog',
  templateUrl: './create-blacklist-entry.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/checkbox.scss',
    '../../../../assets/styles/file-upload.scss',
  ],
})
export class CreateBlacklistDialogComponent implements OnInit, OnDestroy {
  isLoading = false;
  createBlacklistForm = new UntypedFormGroup({});
  containsInvalidFiles = false;
  today = new Date();

  @ViewChild('fileUpload') fileUploadRef!: FileUploadComponent;
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;
  @ViewChild('expiresAt') expiresAtInput!: ElementRef;

  constructor(
    private blacklistService: BlacklistService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public dialogData: { managerAccessRequired: boolean }
  ) {
    this.createBlacklistForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      expiresAt: new UntypedFormControl(toDatetimeInputString(new Date()), [Validators.required]),
      comments: new UntypedFormControl('', [Validators.maxLength(1000), Validators.required]),
    });
  }

  ngOnInit(): void {
    this.createBlacklistForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      expiresAt: new UntypedFormControl(toDatetimeInputString(new Date()), [Validators.required]),
      comments: new UntypedFormControl('', [Validators.maxLength(1000), Validators.required]),
    });
  }

  ngOnDestroy() {
    this.authService.removeManagerInfo();
  }

  onSubmit(): void {
    if (!this.createBlacklistForm.valid) {
      if (this.createBlacklistForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.createBlacklistForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      } else if (this.createBlacklistForm.get('expiresAt')?.invalid) {
        this.expiresAtInput.nativeElement.focus();
      } else if (this.containsInvalidFiles) {
        this.snackBar.open('Remove the invalid files before proceeding!', 'Okay', {
          duration: 10000,
        });
      }
    } else {
      const managerInfo = this.authService.getManagerInfo();
      if (!managerInfo || this.authService.isJwtExpired(managerInfo.accessToken)) {
        console.warn('Manager access has expired, re-prompting for password');
        const managerDialogRef = this.dialog.open(ManagerAccessDialogComponent, {
          width: '600px',
        });
        managerDialogRef.afterClosed().subscribe({
          next: () => {
            this.onSubmit();
          },
        });
        return;
      }
      this.createBlacklistEntry();
    }
  }

  createBlacklistEntry(): void {
    this.isLoading = true;

    this.blacklistService
      .createBlacklist({
        name: this.createBlacklistForm.get('name')?.value,
        expiresAt: toDateObject(this.createBlacklistForm.get('expiresAt')?.value),
        comments: this.createBlacklistForm.get('comments')?.value,
      })
      .subscribe({
        next: (res) => {
          this.fileUploadRef.submit(res.blacklistId);
          this.authService.removeManagerInfo();
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to create blacklist entry, please try again.', 'Okay', {
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
