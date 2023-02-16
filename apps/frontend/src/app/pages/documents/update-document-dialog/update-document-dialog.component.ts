import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDocument, IUpdateDocumentRequest } from '@omnihost/interfaces';
import { ManagerAccessDialogComponent } from '../../../components/manager-access-dialog/manager-access-dialog.component';
import { AuthService } from '../../../services/auth.service';
import { DocumentsService } from '../../../services/documents.service';
import { SentryService } from '../../../services/sentry.service';

@Component({
  selector: 'frontend-update-document-dialog',
  templateUrl: './update-document-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/document-dialog.scss',
    '../../../../assets/styles/checkbox.scss',
  ],
})
export class UpdateDocumentDialogComponent implements OnInit, OnDestroy {
  form = new UntypedFormGroup({});
  showOnDashboard = false;
  isLoading = false;
  uploadedNewFile?: File;
  documentHasChanged = false;

  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;
  @ViewChild('fileUpload') fileUpload!: ElementRef;

  constructor(
    private snackBar: MatSnackBar,
    private documentService: DocumentsService,
    private dialog: MatDialog,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: { managerAccessRequired: boolean; componentData: IDocument }
  ) {}

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      title: new UntypedFormControl(this.dialogData.componentData.title, [Validators.required]),
      comments: new UntypedFormControl(this.dialogData.componentData.comments, [
        Validators.maxLength(1000),
        Validators.required,
      ]),
    });
    this.showOnDashboard = this.dialogData.componentData.showOnDashboard;
  }

  ngOnDestroy() {
    this.authService.removeManagerInfo();
  }

  onSubmit(): void {
    if (!this.form.valid) {
      if (this.form.get('title')?.invalid) {
        this.titleInput.nativeElement.focus();
      } else if (this.form.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      }
    } else {
      // Check if manager access is present and valid
      const managerInfo = this.authService.getManagerInfo();
      if (!managerInfo || this.authService.isJwtExpired(managerInfo.accessToken)) {
        console.warn('Manager access has expired, re-prompting for password');
        const managerDialogRef = this.dialog.open(ManagerAccessDialogComponent, {
          width: '400px',
        });
        // Once the manager access dialog is closed, re-submit the form and check the logic again
        managerDialogRef.afterClosed().subscribe({
          next: () => {
            this.onSubmit();
          },
        });
        return;
      }
      // Manager access information is correct, perform the action
      this.updateDocument();
    }
  }

  getDocumentName(): string {
    let fileName;
    if (!this.documentHasChanged) {
      fileName = this.dialogData.componentData.documentName;
    } else {
      fileName = this.uploadedNewFile?.name || '-';
    }

    const name = fileName;

    if (fileName.length > 20) {
      return fileName.slice(0, 20).trim() + '... (.' + name.split('.')[1] + ')';
    } else {
      return name;
    }
  }

  deleteDocument(): void {
    // Check if manager access is present and valid
    const managerInfo = this.authService.getManagerInfo();
    if (!managerInfo || this.authService.isJwtExpired(managerInfo.accessToken)) {
      console.warn('Manager access has expired, re-prompting for password');
      const managerDialogRef = this.dialog.open(ManagerAccessDialogComponent, {
        width: '400px',
      });
      // Once the manager access dialog is closed, re-submit the form and check the logic again
      managerDialogRef.afterClosed().subscribe({
        next: () => {
          this.deleteDocument();
        },
      });
      return;
    }
    // Confirm the deletion
    if (confirm('Are you sure you wish to delete this document?')) {
      this.isLoading = true;

      this.documentService.deleteDocument(this.dialogData.componentData.documentId).subscribe({
        next: () => {
          this.snackBar.open('Document deleted!', 'Thanks', {
            duration: 5000,
          });
          this.authService.removeManagerInfo();
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open('Failed to delete document, please try again.', 'Okay', {
            duration: 15000,
          });
          this.isLoading = false;
        },
      });
    }
  }

  areYouSure(): void {
    if (confirm('Are you sure you wish to remove this document?')) {
      console.log('deleting file');
      this.documentHasChanged = true;
      this.fileUpload.nativeElement.click();
    } else {
      console.log('not deleting file');
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadDocument($event: any): void {
    this.uploadedNewFile = $event.target.files[0];
  }

  updateDocument(): void {
    this.isLoading = true;

    // Update file
    if (this.documentHasChanged && this.uploadedNewFile) {
      this.documentService
        .updateDocumentFile(this.dialogData.componentData.documentId, this.uploadedNewFile)
        .subscribe({
          next: () => {
            this.snackBar.open('Document file has been updated!', 'Thanks', {
              duration: 5000,
            });
          },
          error: (error: HttpErrorResponse) => {
            SentryService.logError(error);
            this.snackBar.open('Failed to update document file, please try again.', 'Okay', {
              duration: 10000,
            });
          },
        });
    }

    const doc: IUpdateDocumentRequest = {
      title: this.form.get('title')?.value,
      comments: this.form.get('comments')?.value,
      showOnDashboard: this.showOnDashboard,
    };

    // Update document info
    this.documentService.updateDocument(this.dialogData.componentData.documentId, doc).subscribe({
      next: () => {
        this.snackBar.open('Document information updated!', 'Thanks', {
          duration: 5000,
        });
        this.authService.removeManagerInfo();
        document.location.reload();
        this.dialog.closeAll();
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        SentryService.logError(error);
        this.snackBar.open('Failed to update document information, please try again.', 'Okay', {
          duration: 15000,
        });
        this.isLoading = false;
      },
    });
  }
}
