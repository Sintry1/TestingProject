import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CreateAnnouncementRequest,
  IAnnouncement,
  UpdateAnnouncementRequest,
} from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementsService {
  constructor(private http: HttpClient) {}

  /**
   * Calls the API to get a list of Announcements.
   *
   * @returns an observable with a list of IAnnouncements.
   */
  public getAnnouncements(createdAt: Date): Observable<IAnnouncement[]> {
    return this.http.get<IAnnouncement[]>(
      `${env.apiUrl}/announcements?createdAt=${createdAt.toISOString()}`
    );
  }

  /**
   * Calls the API to create a Announcement.
   *
   * @param params - a create Announcement request with all the needed info.
   * @returns an observable with created IAnnouncement.
   */
  public createAnnouncement(params: CreateAnnouncementRequest): Observable<IAnnouncement> {
    return this.http.post<IAnnouncement>(`${env.apiUrl}/announcements`, params);
  }

  /**
   * Calls the API to create a Announcement.
   *
   * @param id ID of the Announcement to update.
   * @param params - an UpdateAnnouncementRequest object to update the Announcement.
   * @returns an observable with updated Announcement.
   */
  public updateAnnouncement(
    id: string,
    params: UpdateAnnouncementRequest
  ): Observable<IAnnouncement> {
    return this.http.patch<IAnnouncement>(`${env.apiUrl}/announcements/${id}`, params);
  }

  /**
   * Calls the API to fetch an Announcement by ID.
   *
   * @param id - the ID of the Announcement.
   * @returns an observable with the requested Announcement.
   */
  public getAnnouncementById(id: string): Observable<IAnnouncement> {
    return this.http.get<IAnnouncement>(`${env.apiUrl}/announcements/${id}`);
  }
}
