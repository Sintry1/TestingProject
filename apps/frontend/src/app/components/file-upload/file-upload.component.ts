import { Component } from '@angular/core';

@Component({
  selector: 'frontend-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  allowedFileFormats = ['png', 'jpg', 'mp4'];

  selectedFiles: File[] = [];
  maxFileSize = 20971520; // in bytes
  isLoading = false;

  constructor() {
    console.log('File Upload ready');
  }

  /**
   * Sets the uploaded files to a variable. Does not send them to the API yet
   * @param $event
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadImages($event: any) {
    this.selectedFiles = this.selectedFiles.concat(
      this.convertFileListToArray($event.target.files)
    );
  }

  /** Converts the object obtained from the file input and converts it into an array
   * that then can be used to display the selected files */
  convertFileListToArray(files: FileList): File[] {
    return Object.values(files);
  }

  removeUploadedFile(fileToRemove: File): void {
    this.selectedFiles = this.selectedFiles.filter((file) => file !== fileToRemove);
  }

  /**
   * Calculates the total file size of the uploaded images
   */
  getTotalFileSize(): number {
    let size = 0;
    this.selectedFiles.forEach((file) => {
      size += file.size;
    });
    return size;
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

  /**
   * Get a formatted file name that is limited to 20 characters + extension.
   * @param filename the original file name.
   * @returns the formatted name.
   */
  formatFileName(filename: string): string {
    if (filename.length <= 30) {
      return filename;
    }
    const nameParts = filename.split('.');
    const extension = nameParts[nameParts.length - 1];

    if (filename.length - extension.length > 25) {
      return filename.slice(0, 25) + `...(${extension})`;
    }

    let nameWithoutExtension = '';
    // Combine the name minus the extension
    for (let i = 0; i < nameParts.length - 1; i++) {
      nameWithoutExtension += nameParts[i];
      // Quite early if the name is already too long
      if (nameWithoutExtension.length > 25) {
        break;
      }
    }
    return nameWithoutExtension.slice(0, 25) + `...(${extension})`;
  }

  /**
   * Get a formatted file size.
   * @param size the size of the file, in bits.
   * @returns the file converted into MB/KB text.
   */
  formatFileSize(size: number): string {
    if (size / 1000 > 1000) {
      return (size / 1000000).toFixed(2) + 'MB';
    } else {
      return (size / 1000).toFixed(0) + 'KB';
    }
  }
}
