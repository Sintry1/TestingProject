import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDocument } from '@omnihost/interfaces';
import { DocumentsService } from '../../services/documents.service';

@Component({
  selector: 'frontend-dashboard-document-section',
  templateUrl: './dashboard-document-section.component.html',
  styleUrls: ['./dashboard-document-section.component.scss'],
})
export class DashboardDocumentSectionComponent implements OnInit {
  documentList!: IDocument[];

  constructor(
    private documentsService: DocumentsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.documentsService.getDashboardDocuments().subscribe({
      next: (documents) => {
        this.documentList = documents;
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('Dashboard documents have failed to load', 'Okay', {
          duration: 10000,
        });
      },
    });
  }
}
