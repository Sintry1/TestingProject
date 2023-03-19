import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileTypePattern } from '@omnihost/interfaces';
import { FilesService } from '../../services/files.service';
import { SentryService } from '../../services/sentry.service';

@Component({
  selector: 'frontend-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  allowedFileFormats = ['png', 'jpg', 'mp4'];

  @Output()
  submissionFinishedEvent = new EventEmitter();
  @Output()
  containsInvalidFilesEvent = new EventEmitter();

  @Input()
  parentType!: 'luggages' | 'cars' | 'announcements' | 'blacklist';
  @Input()
  existingFiles: string[] = [];

  constraints = {
    maxFileSize: 0,
    maxFilesNumber: 0,
    allowedExtensions: FileTypePattern.DOCUMENT_AND_PICTURES_AND_VIDEO,
  };
  allowedExtensionsAsMimeType = '';
  removedFiles: string[] = [];
  selectedFiles: File[] = [];
  isLoading = false;
  private _containsInvalidFiles = false;

  constructor(
    private filesService: FilesService,
    private snackBar: MatSnackBar,
    private ref: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    // Exit early if the parent type is incorrect
    if (!this.parentType) {
      SentryService.logEvent({
        message: 'File upload was attempted for an undefined component',
        level: 'error',
      });
    }
    // Set the file constraints
    this.constraints = this.filesService.getFileConstraints(this.parentType);
    this.allowedExtensionsAsMimeType = this.filesService.getExtensionsAsMimeTypes(
      this.constraints.allowedExtensions
    );
  }

  /**
   * Sets the uploaded files to a variable. Does not send them to the API yet.
   * @param $event
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadImages($event: any) {
    this.selectedFiles = this.selectedFiles.concat(
      this.convertFileListToArray($event.target.files)
    );
    this.areFilesValid();
    this.ref.detectChanges();
  }

  /**
   * Converts the object obtained from the file input and converts it into an array,
   * that then can be used to display the selected files.
   * */
  convertFileListToArray(files: FileList): File[] {
    return Object.values(files);
  }

  removeExistingFile(fileToRemove: string): void {
    this.removedFiles.push(fileToRemove);
    this.existingFiles = this.existingFiles.filter((file) => file !== fileToRemove);
    this.areFilesValid();
    this.ref.detectChanges();
  }

  removeUploadedFile(fileToRemove: File): void {
    this.selectedFiles = this.selectedFiles.filter((file) => file !== fileToRemove);
    this.areFilesValid();
    this.ref.detectChanges();
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
   * Get a readable version of the allowed file formats.
   * @returns formatted extensions string.
   */
  getExtensionsAsFormattedString(): string {
    return this.filesService.getExtensionsAsFormattedString(this.constraints.allowedExtensions);
  }

  /**
   * Strips the UUID that has been prepended to the filename.
   * @param string
   * @returns string
   */
  stripUuid(string: string): string {
    return string.slice(36);
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
    let extension = nameParts[nameParts.length - 1];
    // Check for the edge case of a file without an extension
    if (nameParts.length === 1) {
      extension = '';
    }

    if (filename.length - extension.length > 25) {
      return filename.slice(0, 25) + `...${extension ? `(${extension})` : ''}`;
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

  /**
   * Get a formatted file extensions list
   */
  getFormattedAllowedFileExtensions(): string {
    return this.constraints.allowedExtensions
      .replaceAll('(', '')
      .replaceAll(/\|+/g, ', ')
      .replaceAll(')', '');
  }

  areFilesValid(): boolean {
    // Exit early if the parent type is incorrect
    if (!this.parentType) {
      return false;
    }

    // Validate the number of files
    if (
      this.selectedFiles.length + this.existingFiles.length - this.removedFiles.length >
      this.constraints.maxFilesNumber
    ) {
      this.containsInvalidFiles = true;
      return false;
    }

    // Validate each file
    let invalidFiles = false;
    this.selectedFiles.forEach((file) => {
      if (!this.isFileValid(file)) {
        invalidFiles = true;
      }
    });
    this.containsInvalidFiles = invalidFiles;
    return !invalidFiles;
  }

  isFileValid(file: File): boolean {
    // Exit early if the parent type is incorrect
    if (!this.parentType) {
      return false;
    }

    // Validate the file size
    if (file.size > this.constraints.maxFileSize) {
      return false;
    }

    // Validate the extension
    const nameParts = file.name.split('.');
    const fileType = nameParts[nameParts.length - 1].toLowerCase();
    const pattern = new RegExp(this.constraints.allowedExtensions);
    if (!fileType.match(pattern)) {
      return false;
    }

    return true;
  }

  /**
   * Submit the changes to the files, uploading the adding files and removing the removed files.
   * @param id the id of the entity to update.
   * @emits submissionFinishedEvent once the update is complete.
   */
  submit(id: string) {
    // Exit early if the parent type is incorrect
    if (!this.parentType) {
      this.submissionFinishedEvent.emit('fail');
      return;
    }

    // Check that the files are valid
    if (!this.areFilesValid()) {
      console.warn('The provided files are invalid');
      this.snackBar.open(`The provided files are invalid`, 'Okay', {
        duration: 15000,
      });
      this.submissionFinishedEvent.emit('fail');
      return;
    }

    let removalFinished = true;
    let uploadFinished = true;

    // Update the existing files
    if (this.removedFiles.length > 0) {
      removalFinished = false;
      this.filesService.removeFiles(this.parentType, id, this.removedFiles).subscribe({
        next: () => {
          removalFinished = true;
          if (uploadFinished && removalFinished) {
            this.submissionFinishedEvent.emit('success');
          }
        },
        error: (error) => {
          SentryService.logError(error);
          this.submissionFinishedEvent.emit('fail');
          this.isLoading = false;
        },
      });
    }

    // Upload the new files
    if (this.selectedFiles.length > 0) {
      uploadFinished = false;
      this.filesService.addFiles(this.parentType, id, this.selectedFiles).subscribe({
        next: () => {
          uploadFinished = true;
          if (uploadFinished && removalFinished) {
            this.submissionFinishedEvent.emit('success');
          }
        },
        error: (error) => {
          SentryService.logError(error);
          this.submissionFinishedEvent.emit('fail');
          this.isLoading = false;
        },
      });
    }

    if (uploadFinished && removalFinished) {
      this.submissionFinishedEvent.emit('success');
    }
  }

  // Getters and Setters

  public get containsInvalidFiles() {
    return this._containsInvalidFiles;
  }
  public set containsInvalidFiles(value) {
    this._containsInvalidFiles = value;
    this.containsInvalidFilesEvent.emit(value);
  }
}
