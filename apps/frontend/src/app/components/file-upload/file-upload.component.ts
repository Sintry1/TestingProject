import { Component } from '@angular/core';

@Component({
  selector: 'frontend-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  constructor() {
    console.log('File Upload ready');
  }
}
