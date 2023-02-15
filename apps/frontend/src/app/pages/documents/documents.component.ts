import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocumentSortOptions, IDocument, SortOrder } from '@omnihost/interfaces';
import { ManagerAccessDialogComponent } from '../../components/manager-access-dialog/manager-access-dialog.component';
import { DocumentsService } from '../../services/documents.service';
import { SentryService } from '../../services/sentry.service';
import { CreateDocumentDialogComponent } from './create-document-dialog/create-document-dialog.component';

@Component({
  selector: 'frontend-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss', '../../../assets/styles/table.scss'],
})
export class DocumentsComponent implements OnInit {
  documentList: IDocument[] = [];
  sortBy: DocumentSortOptions = DocumentSortOptions.LAST_VIEWED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';
  isLoading = false;

  constructor(
    private documentService: DocumentsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchDocuments();
  }

  fetchDocuments(): void {
    this.isLoading = true;

    this.documentService.getDocuments(this.sortBy, this.sortOrder, this.search).subscribe({
      next: (documents) => {
        this.documentList = documents;
        this.isLoading = false;
      },
      error: (error) => {
        SentryService.logError(error);
        this.snackBar.open('Documents have failed to load', 'Okay', {
          duration: 10000,
        });
        this.isLoading = false;
      },
    });
  }

  openCreateDocumentDialog(): void {
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      data: {
        component: CreateDocumentDialogComponent,
        width: '600px',
      },
    });
  }
}
