import { Component } from '@angular/core';

@Component({
  selector: 'frontend-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  filesSelected = false;
  allowedFileFormats = ['png', 'jpg', 'mp4'];

  constructor() {
    console.log('File Upload ready');
  }

  /**
   * Get a readable version of the allowed file formats list.
   * @returns formatted formats lists.
   */
  getAllowedFileFormatsAsText(): string {
    if (this.allowedFileFormats.length == 0) {
      return 'none';
    }
    if (this.allowedFileFormats.length == 1) {
      return this.allowedFileFormats[0];
    }
    let text = '';
    for (let i = 0; i < this.allowedFileFormats.length; i++) {
      text += this.allowedFileFormats[i];
      if (i == this.allowedFileFormats.length - 2) {
        text += ' or ';
      } else if (i < this.allowedFileFormats.length - 2) {
        text += ', ';
      }
    }
    return text;
  }
}
