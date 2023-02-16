import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDocument } from '@omnihost/interfaces';
import { DocumentsService } from '../../../services/documents.service';
import { SentryService } from '../../../services/sentry.service';
import { SeeDocumentDialogComponent } from '../../document-widget/see-document-dialog/see-document-dialog.component';

@Component({
  selector: 'frontend-dashboard-document-section',
  templateUrl: './dashboard-document-section.component.html',
  styleUrls: ['./dashboard-document-section.component.scss'],
})
export class DashboardDocumentSectionComponent implements OnInit {
  documentList!: IDocument[];

  constructor(
    private documentsService: DocumentsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.documentsService.getDashboardDocuments().subscribe({
      next: (documents) => {
        this.documentList = documents;
      },
      error: (error: HttpErrorResponse) => {
        SentryService.logError(error);
        this.snackBar.open('Dashboard documents have failed to load', 'Okay', {
          duration: 10000,
        });
      },
    });
  }

  openSeeDocumentDialog(documentId: string): void {
    this.dialog.open(SeeDocumentDialogComponent, {
      data: documentId,
      disableClose: true,
    });
  }

  displayTitle(title: string) {
    if (title.length > 23) {
      return title.substring(0, 20) + '...';
    } else {
      return title;
    }
  }
}
