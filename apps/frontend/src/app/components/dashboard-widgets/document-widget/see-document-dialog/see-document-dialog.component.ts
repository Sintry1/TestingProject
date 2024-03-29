import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { IGetDocumentByIdResponse } from '@omnihost/interfaces';
import { DocumentsService } from '../../../../services/documents.service';
import { SentryService } from '../../../../services/sentry.service';

@Component({
  selector: 'frontend-see-document-dialog',
  templateUrl: './see-document-dialog.component.html',
  styleUrls: ['./see-document-dialog.component.scss'],
})
export class SeeDocumentDialogComponent implements OnInit {
  document?: IGetDocumentByIdResponse;
  documentFileUrl?: SafeUrl;
  isLoading = true;

  constructor(
    private documentService: DocumentsService,
    private snackBar: MatSnackBar,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public documentId: string
  ) {}

  ngOnInit(): void {
    this.fetchDocument();
  }

  fetchDocument(): void {
    this.isLoading = true;
    this.documentService.getDocumentById(this.documentId).subscribe({
      next: (document) => {
        this.document = document;
        this.fetchDocumentFile(this.document.downloadUrl);
      },
      error: (error) => {
        SentryService.logError(error);
        this.snackBar.open('The Document has failed to load', 'Okay', {
          duration: 10000,
        });
      },
    });
  }

  fetchDocumentFile(url: string): void {
    this.documentService.getDocumentFile(url).subscribe({
      next: (documentFile) => {
        const documentBlob = new Blob([documentFile], {
          type: 'application/pdf',
        });
        this.documentFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          URL.createObjectURL(documentBlob)
        );
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        SentryService.logError(error);
        this.snackBar.open('The Document File has failed to load', 'Okay', {
          duration: 10000,
        });
      },
    });
  }
}
