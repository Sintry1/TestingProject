import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileTypePattern, IAnnouncement, ICar, ILuggage } from '@omnihost/interfaces';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private http: HttpClient) {}

  /**
   * Add the provided files to the given entity.
   * @param type the entity type.
   * @param id the entity id.
   * @param files the files to upload.
   * @returns an observable of the updated entity.
   */
  public addFiles(
    type: 'luggages' | 'cars' | 'announcements' | 'blacklist',
    id: string,
    files: File[]
  ) {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    return this.http.patch<ILuggage | ICar | IAnnouncement>(
      `${env.apiUrl}/${type}/${id}/files/add`,
      formData
    );
  }

  /**
   * Remove the specified files from the given entity.
   * @param type the entity type.
   * @param id the entity id.
   * @param files the files to remove, by name.
   * @returns an observable of the updated entity.
   */
  public removeFiles(
    type: 'luggages' | 'cars' | 'announcements' | 'blacklist',
    id: string,
    files: string[]
  ) {
    return this.http.patch<ILuggage | ICar | IAnnouncement>(
      `${env.apiUrl}/${type}/${id}/files/remove`,
      files
    );
  }

  /**
   * Get the file upload constraints for the given entity.
   * @param type entity type.
   * @returns file validation rules.
   */
  getFileConstraints(type: 'luggages' | 'cars' | 'announcements' | 'blacklist'): {
    maxFileSize: number;
    maxFilesNumber: number;
    allowedExtensions: FileTypePattern;
  } {
    switch (type) {
      case 'luggages':
        return {
          maxFileSize: 10000000,
          maxFilesNumber: 20,
          allowedExtensions: FileTypePattern.PICTURES,
        };
      case 'cars':
        return {
          maxFileSize: 25000000,
          maxFilesNumber: 20,
          allowedExtensions: FileTypePattern.PICTURES_AND_VIDEO,
        };
      case 'announcements':
        return {
          maxFileSize: 50000000,
          maxFilesNumber: 5,
          allowedExtensions: FileTypePattern.DOCUMENT_AND_PICTURES,
        };
      case 'blacklist':
        return {
          maxFileSize: 10000000,
          maxFilesNumber: 20,
          allowedExtensions: FileTypePattern.PICTURES,
        };
    }
  }

  /**
   * Get a readable version of the allowed file formats.
   * @param fileTypePattern the allowed extensions.
   * @returns formatted extensions string.
   */
  getExtensionsAsFormattedString(fileTypePattern: FileTypePattern): string {
    let formattedTypes = '';
    const extensions = fileTypePattern.replaceAll('(', '').replaceAll(')', '').split('|');
    extensions.forEach((type) => {
      formattedTypes += `${type}, `;
    });
    // Remove the trailing comma and space
    formattedTypes = formattedTypes.substring(0, formattedTypes.length - 2);
    // Replace the last comma with 'or'
    formattedTypes = formattedTypes.replaceAll(/,(?!.*,)/gm, ' or ');
    return formattedTypes;
  }

  /**
   * Get a version of the allowed extensions that can be used to limit selection when selecting files.
   * @param fileTypePattern the allowed extensions.
   * @returns formatted mime types string.
   */
  getExtensionsAsMimeTypes(fileTypePattern: FileTypePattern): string {
    let formattedTypes = '';
    const extensions = fileTypePattern.replaceAll('(', '').replaceAll(')', '').split('|');
    extensions.forEach((type) => {
      if (type === 'png' || type === 'jpg' || type === 'jpeg') {
        formattedTypes += `image/${type},`;
      }
      if (type === 'mp4' || type === 'mov') {
        formattedTypes += `video/${type},`;
      }
      if (type === 'pdf') {
        formattedTypes += `application/${type},`;
      }
      if (type === 'docx') {
        formattedTypes +=
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document,';
      }
    });
    // Remove the trailing comma
    formattedTypes = formattedTypes.substring(0, formattedTypes.length - 1);
    return formattedTypes;
  }
}
