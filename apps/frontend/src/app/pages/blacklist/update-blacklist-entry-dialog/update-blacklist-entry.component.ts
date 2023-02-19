import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IBlacklist } from '@omnihost/interfaces';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { BlacklistService } from '../../../services/blacklist.service';
import { AuthService } from '../../../services/auth.service';
import { SentryService } from '../../../services/sentry.service';
import { toDateObject, toDatetimeInputString } from '../../../utils/date.util';

@Component({
  selector: 'frontend-update-blacklist-dialog',
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
    @Inject(MAT_DIALOG_DATA) public dialogData: { managerAccessRequired: boolean; componentData: IBlacklist }
  ) {
    //this.files = this.dialogData.componentData.files;

    this.updateBlacklistForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      expiresAt: new UntypedFormControl(toDatetimeInputString(new Date()), [Validators.required]),
      comments: new UntypedFormControl('', [Validators.maxLength(1000), Validators.required]),
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
          // upload files
          this.fileUploadRef.submit(res.blacklistId);
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to update blacklist, please try again.', 'Okay', {
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
      this.snackBar.open('Blacklist updated!', 'Thanks', {
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
