import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnnouncement, ICar, ILuggage } from '@omnihost/interfaces';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private http: HttpClient) {}

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
}
