import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICreateDocumentRequest } from '@omnihost/interfaces';
import { ManagerAccessDialogComponent } from '../../../components/manager-access-dialog/manager-access-dialog.component';
import { AuthService } from '../../../services/auth.service';
import { DocumentsService } from '../../../services/documents.service';

@Component({
  selector: 'frontend-create-document-dialog',
  templateUrl: './create-document-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/document-dialog.scss',
    '../../../../assets/styles/checkbox.scss',
  ],
})
export class CreateDocumentDialogComponent implements OnInit, OnDestroy {
  createDocumentForm = new UntypedFormGroup({});
  showOnDashboard = false;
  isLoading = false;
  uploadedFile?: File;
  dialogData;

  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;

  constructor(
    private snackBar: MatSnackBar,
    private documentService: DocumentsService,
    private dialog: MatDialog,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: { managerAccessRequired: boolean }
  ) {
    this.dialogData = data;
  }

  ngOnInit(): void {
    this.createDocumentForm = new UntypedFormGroup({
      title: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', [Validators.maxLength(1000), Validators.required]),
    });
  }

  ngOnDestroy() {
    this.authService.removeManagerInfo();
  }

  onSubmit(): void {
    if (!this.createDocumentForm.valid) {
      if (this.createDocumentForm.get('title')?.invalid) {
        this.titleInput.nativeElement.focus();
      } else if (this.createDocumentForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      }
    } else {
      // Check if manager access is required, and if it is present and valid
      if (this.dialogData.managerAccessRequired) {
        const managerInfo = this.authService.getManagerInfo();
        if (!managerInfo || this.authService.isJwtExpired(managerInfo.accessToken)) {
          console.warn('Manager access has expired, re-prompting for password');
          const managerDialogRef = this.dialog.open(ManagerAccessDialogComponent, {
            width: '600px',
          });
          // Once the manager access dialog is closed, re-submit the form and check the logic again
          managerDialogRef.afterClosed().subscribe({
            next: () => {
              this.onSubmit();
            },
          });
        } else {
          // Manager access information is correct, perform the action
          this.createDocument();
        }
      } else {
        // No manager access needed, perform the action
        this.createDocument();
      }
    }
  }

  getDocumentName(name: string): string {
    const fileName = name.split('.')[0];

    return fileName.length > 20
      ? fileName.slice(0, 20).trim() + '... (.' + name.split('.')[1] + ')'
      : name;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadDocument($event: any) {
    this.uploadedFile = $event.target.files[0];
  }

  createDocument(): void {
    this.isLoading = true;

    if (this.uploadedFile === undefined) {
      this.snackBar.open('No file attached. Please attach a file and try again!', 'Thanks', {
        duration: 5000,
      });
      this.isLoading = false;
      return;
    }

    const doc: ICreateDocumentRequest & { document: File } = {
      title: this.createDocumentForm.get('title')?.value,
      comments: this.createDocumentForm.get('comments')?.value,
      showOnDashboard: this.showOnDashboard,
      document: this.uploadedFile,
    };

    this.documentService.createDocument(doc).subscribe({
      next: () => {
        this.snackBar.open('Document added!', 'Thanks', { duration: 5000 });
        document.location.reload();
        this.dialog.closeAll();
        this.isLoading = false;
        this.authService.removeManagerInfo();
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('Failed to upload document, please try again.', 'Okay', {
          duration: 15000,
        });
        this.isLoading = false;
      },
    });
  }
}
