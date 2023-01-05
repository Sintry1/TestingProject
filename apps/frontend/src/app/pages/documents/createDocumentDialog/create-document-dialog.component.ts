import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICreateDocumentRequest, IDocument } from '@omnihost/interfaces';
import { DocumentsService } from '../../../services/documents.service';

@Component({
  selector: 'frontend-create-document-dialog',
  templateUrl: './create-document-dialog.component.html',
  styleUrls: [
    '../../../../assets/styles/dialog.scss',
    './create-document-dialog.component.scss',
    '../../../../assets/styles/checkbox.scss',
  ],
})
export class CreateDocumentDialogComponent implements OnInit {
  createDocumentForm = new UntypedFormGroup({});
  showOnDashboard = false;
  isLoading = false;
  uploadedFile?: File;

  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;

  constructor(
    private snackBar: MatSnackBar,
    private documentService: DocumentsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createDocumentForm = new UntypedFormGroup({
      title: new UntypedFormControl('', [Validators.required]),
      comments: new UntypedFormControl('', [
        Validators.maxLength(1000),
        Validators.required,
      ]),
    });
  }

  onSubmit(): void {
    if (!this.createDocumentForm.valid) {
      if (this.createDocumentForm.get('title')?.invalid) {
        this.titleInput.nativeElement.focus();
      } else if (this.createDocumentForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      }
    } else {
      this.createDocument();
    }
  }

  uploadImages($event: any) {
    this.uploadedFile = $event.target.files[0];
  }

  createDocument(): void {
    this.isLoading = true;

    if(this.uploadedFile === undefined) {
      this.snackBar.open('No file has been uploaded!', 'Thanks', { duration: 5000 });
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
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open(
          'Failed to upload document, please try again.',
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
