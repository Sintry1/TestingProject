import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnnouncement, ICar, ILuggage } from '@omnihost/interfaces';
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
  public addFiles(type: 'luggages' | 'cars' | 'announcements', id: string, files: File[]) {
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
  public removeFiles(type: 'luggages' | 'cars' | 'announcements', id: string, files: string[]) {
    return this.http.patch<ILuggage | ICar | IAnnouncement>(
      `${env.apiUrl}/${type}/${id}/files/remove`,
      files
    );
  }
}
