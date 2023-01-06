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
import {
  IDocument,
  ILuggage,
  IUpdateDocumentRequest,
} from '@omnihost/interfaces';
import { DocumentsService } from '../../../services/documents.service';

@Component({
  selector: 'frontend-update-document-dialog',
  templateUrl: './update-document-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    './update-document-dialog.component.scss',
    '../../../../assets/styles/checkbox.scss',
  ],
})
export class UpdateDocumentDialogComponent implements OnInit {
  updateDocumentForm = new UntypedFormGroup({});
  showOnDashboard = false;
  isLoading = false;
  uploadedFile?: File;

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
      title: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', [
        Validators.maxLength(1000),
        Validators.required,
      ]),
    });
  }

  onSubmit(): void {
    if (!this.updateDocumentForm.valid) {
      if (this.updateDocumentForm.get('title')?.invalid) {
        this.titleInput.nativeElement.focus();
      } else if (this.updateDocumentForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      }
    } else {
      this.createDocument();
    }
  }

  showDocument(name: string): string {
    const fileName = name.split('.')[0];

    if (fileName.length > 20) {
      return fileName.slice(0, 20).trim() + '... (.' + name.split('.')[1] + ')';
    } else {
      return name;
    }
  }

  uploadDocument($event: any) {
    this.uploadedFile = $event.target.files[0];
  }

  createDocument(): void {
    this.isLoading = true;

    if (this.uploadedFile === undefined) {
      this.snackBar.open('No file has been uploaded!', 'Thanks', {
        duration: 5000,
      });
      return;
    }

    const doc: IUpdateDocumentRequest = {
      title: this.updateDocumentForm.get('title')?.value,
      comments: this.updateDocumentForm.get('comments')?.value,
      showOnDashboard: this.showOnDashboard,
    };

    console.log(doc);

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
