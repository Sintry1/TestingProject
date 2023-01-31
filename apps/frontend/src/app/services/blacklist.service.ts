import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CreateBlacklistRequest,
  IBlacklist,
  UpdateBlacklistRequest,
} from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlacklistService {
  constructor(private http: HttpClient) {}

  /**
   * Calls the API to get a list of blacklist entries.
   *
   * @returns an observable with a list of IBlacklists.
   */
  public getBlacklist(): Observable<IBlacklist[]> {
    return this.http.get<IBlacklist[]>(
      `${env.apiUrl}/blacklist`
    );
  }

  /**
   * Calls the API to create a blacklist.
   *
   * @param params - a create blacklist request with all the needed info.
   * @returns an observable with created IBlacklist.
   */
  public createBlacklist(params: CreateBlacklistRequest): Observable<IBlacklist> {
    return this.http.post<IBlacklist>(`${env.apiUrl}/blacklist`, params);
  }

  /**
   * Calls the API to create a blacklist.
   *
   * @param id ID of the blacklist to update.
   * @param params - an UpdateBlacklistRequest object to update the blacklist.
   * @returns an observable with updated blacklist.
   */
  public updateBlacklist(id: string, params: UpdateBlacklistRequest): Observable<IBlacklist> {
    return this.http.patch<IBlacklist>(`${env.apiUrl}/blacklist/${id}`, params);
  }

  /**
   * Calls the API to fetch a blacklist by ID.
   *
   * @param id - the ID of the blacklist.
   * @returns an observable with the requested blacklist.
   */
  public getBlacklistById(id: string): Observable<IBlacklist> {
    return this.http.get<IBlacklist>(`${env.apiUrl}/blacklist/${id}`);
  }
}
