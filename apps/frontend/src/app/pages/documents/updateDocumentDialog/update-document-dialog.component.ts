import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDocument, IUpdateDocumentRequest } from '@omnihost/interfaces';
import { DocumentsService } from '../../../services/documents.service';

@Component({
  selector: 'frontend-update-document-dialog',
  templateUrl: './update-document-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    '../../../../assets/styles/document-dialog.scss',
    '../../../../assets/styles/checkbox.scss',
  ],
})
export class UpdateDocumentDialogComponent implements OnInit {
  updateDocumentForm = new UntypedFormGroup({});
  showOnDashboard = false;
  isLoading = false;
  uploadedNewFile?: File;
  documentHasChanged = false;

  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDocument,
    private snackBar: MatSnackBar,
    private documentService: DocumentsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.updateDocumentForm = new UntypedFormGroup({
      title: new UntypedFormControl(this.data.title, [Validators.required]),
      comments: new UntypedFormControl(this.data.comments, [
        Validators.maxLength(1000),
        Validators.required,
      ]),
    });
    this.showOnDashboard = this.data.showOnDashboard;
  }

  onSubmit(): void {
    if (!this.updateDocumentForm.valid) {
      if (this.updateDocumentForm.get('title')?.invalid) {
        this.titleInput.nativeElement.focus();
      } else if (this.updateDocumentForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      }
    } else {
      this.updateDocument();
    }
  }

  getDocumentName(): string {
    let fileName;
    if(!this.documentHasChanged) {
      fileName = this.data.documentName
    } else {
      fileName = this.uploadedNewFile?.name || 'noName.nan'
    }

    const name = fileName;

    if (fileName.length > 20) {
      return fileName.slice(0, 20).trim() + '... (.' + name.split('.')[1] + ')';
    } else {
      return name;
    }
  }

  removeFile(): void {
    if (confirm('Are you sure you wish to remove this document?')) {
      console.log('deleting file');
      this.documentHasChanged = true;
    } else {
      console.log('not deleting file');
    }
  }

  deleteDocument(): void {
    if (confirm('Are you sure you wish to delete this document?')) {
      this.isLoading = true;

      this.documentService.deleteDocument(this.data.documentId).subscribe({
        next: () => {
          this.snackBar.open('Document deleted!', 'Thanks', {
            duration: 5000,
          });
          document.location.reload();
          this.dialog.closeAll();
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.snackBar.open(
            'Failed to delete document, please try again.',
            'Okay',
            {
              duration: 15000,
            }
          );
          this.isLoading = false;
        },
      });
    }
  }

  uploadDocument($event: any): void {
    this.uploadedNewFile = $event.target.files[0];
  }

  updateDocument(): void {
    this.isLoading = true;

    // Update file
    if (this.documentHasChanged && this.uploadedNewFile) {
      this.documentService
        .updateDocumentFile(this.data.documentId, this.uploadedNewFile)
        .subscribe({
          next: () => {
            this.snackBar.open('Document file has been updated!', 'Thanks', {
              duration: 5000,
            });
          },
          error: (err) => {
            console.error(err);
            this.snackBar.open(
              'Failed to update document file, please try again.',
              'Okay',
              {
                duration: 10000,
              }
            );
          },
        });
    }

    const doc: IUpdateDocumentRequest = {
      title: this.updateDocumentForm.get('title')?.value,
      comments: this.updateDocumentForm.get('comments')?.value,
      showOnDashboard: this.showOnDashboard,
    };

    // Update document info
    this.documentService.updateDocument(this.data.documentId, doc).subscribe({
      next: () => {
        this.snackBar.open('Document information updated!', 'Thanks', {
          duration: 5000,
        });
        document.location.reload();
        this.dialog.closeAll();
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open(
          'Failed to update document information, please try again.',
          'Okay',
          {
            duration: 15000,
          }
        );
        this.isLoading = false;
      },
    });
  }
}
