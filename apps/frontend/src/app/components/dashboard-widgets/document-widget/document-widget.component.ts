import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDocument } from '@omnihost/interfaces';
import { UpdateDocumentDialogComponent } from '../../../pages/documents/update-document-dialog/update-document-dialog.component';
import { ManagerAccessDialogComponent } from '../../manager-access-dialog/manager-access-dialog.component';
import { SeeDocumentDialogComponent } from './see-document-dialog/see-document-dialog.component';

@Component({
  selector: 'frontend-document-widget',
  templateUrl: './document-widget.component.html',
  styleUrls: ['./document-widget.component.scss'],
})
export class DocumentWidgetComponent {
  @Input() document!: IDocument;

  constructor(private dialog: MatDialog) {}

  openSeeDocumentDialog(documentId: string): void {
    this.dialog.open(SeeDocumentDialogComponent, {
      data: documentId,
      disableClose: true,
    });
  }

  openDocumentUpdateDialog(): void {
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        component: UpdateDocumentDialogComponent,
        componentData: this.document,
        width: '600px',
        disableClose: true,
      },
    });
  }

  displayTitle() {
    if (this.document.title.length > 40) {
      return this.document.title.substring(0, 35) + '...';
    } else {
      return this.document.title;
    }
  }
}
