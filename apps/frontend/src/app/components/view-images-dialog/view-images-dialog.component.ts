import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'frontend-view-images-dialog',
  templateUrl: './view-images-dialog.component.html',
  styleUrls: ['./view-images-dialog.component.scss', '../../../assets/styles/dialog.scss'],
})
export class ViewImagesDialogComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
