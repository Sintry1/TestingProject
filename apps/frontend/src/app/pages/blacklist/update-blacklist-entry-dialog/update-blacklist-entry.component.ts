import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IBlacklist } from '@omnihost/interfaces';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { ManagerAccessDialogComponent } from '../../../components/manager-access-dialog/manager-access-dialog.component';
import { AuthService } from '../../../services/auth.service';
import { BlacklistService } from '../../../services/blacklist.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateInputString, toDateObject } from '../../../utils/date.util';

@Component({
  selector: 'frontend-update-blacklist-entry-dialog',
  templateUrl: './update-blacklist-entry.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/file-upload.scss',
    '../../../../assets/styles/checkbox.scss',
  ],
})
export class UpdateBlacklistDialogComponent {
  updateBlacklistForm = new UntypedFormGroup({});
  isLoading = false;
  containsInvalidFiles = false;
  files: string[] = [];
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
    @Inject(MAT_DIALOG_DATA)
    public dialogData: { managerAccessRequired: boolean; componentData: IBlacklist }
  ) {
    this.files = this.dialogData.componentData.files || [];

    this.updateBlacklistForm = new UntypedFormGroup({
      name: new UntypedFormControl(dialogData.componentData.name, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      expiresAt: new UntypedFormControl(
        dialogData.componentData.expiresAt
          ? toDateInputString(new Date(dialogData.componentData.expiresAt))
          : '',
        [Validators.required]
      ),
      comments: new UntypedFormControl(dialogData.componentData.comments, [
        Validators.maxLength(1000),
        Validators.required,
      ]),
    });
  }

  onSubmit(): void {
    if (!this.updateBlacklistForm.valid) {
      if (this.updateBlacklistForm.get('name')?.invalid) {
        this.nameInput.nativeElement.focus();
      } else if (this.updateBlacklistForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      } else if (this.updateBlacklistForm.get('expiresAt')?.invalid) {
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
      this.updateBlacklist();
    }
  }

  updateBlacklist(): void {
    this.isLoading = true;

    this.blacklistService
      .updateBlacklist(this.dialogData.componentData.blacklistId, {
        name: this.updateBlacklistForm.get('name')?.value,
        expiresAt: toDateObject(this.updateBlacklistForm.get('expiresAt')?.value),
        comments: this.updateBlacklistForm.get('comments')?.value,
      })
      .subscribe({
        next: (res) => {
          this.fileUploadRef.submit(res.blacklistId);
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to update unwanted guest, please try again.', 'Okay', {
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
      this.snackBar.open('Unwanted guest updated!', 'Thanks', {
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
