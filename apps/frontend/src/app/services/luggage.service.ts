import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ICreateLuggageRequest,
  IGetLuggageByIdResponse,
  ILuggage,
  IUpdateLuggageRequest,
  LuggageSortOptions,
  LuggageType,
  SortOrder,
} from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LuggageService {
  constructor(private http: HttpClient) {}

  public getLuggagesWithinRange(type: LuggageType, from?: string, to?: string): Observable<ILuggage[]> {
    let query = '';
    if (from && to) {
      query = `?from=${from}&to=${to}`;
    } else if (from) {
      query = `?from=${from}`;
    } else if (to) {
      query = `?to=${to}`;
    }

    return this.http.get<ILuggage[]>(`${env.apiUrl}/luggages/all/${type}${query}`);
  }

  public getCheckin(
    createdAt: Date,
    sortBy?: LuggageSortOptions,
    sortOrder?: SortOrder,
    search?: string
  ): Observable<ILuggage[]> {
    return this.http.get<ILuggage[]>(
      `${
        env.apiUrl
      }/luggages/checkin?createdAt=${createdAt.toISOString()}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`
    );
  }

  public getCheckout(
    createdAt: Date,
    sortBy?: LuggageSortOptions,
    sortOrder?: SortOrder,
    search?: string
  ): Observable<ILuggage[]> {
    return this.http.get<ILuggage[]>(
      `${
        env.apiUrl
      }/luggages/checkout?createdAt=${createdAt.toISOString()}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`
    );
  }

  public getLongTerm(
    createdAt: Date,
    sortBy?: LuggageSortOptions,
    sortOrder?: SortOrder,
    search?: string
  ): Observable<ILuggage[]> {
    return this.http.get<ILuggage[]>(
      `${
        env.apiUrl
      }/luggages/longTerm?createdAt=${createdAt.toISOString()}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`
    );
  }

  public getById(id: string) {
    return this.http.get<IGetLuggageByIdResponse>(`${env.apiUrl}/luggages/id/${id}`);
  }

  public update(id: string, params: IUpdateLuggageRequest): Observable<ILuggage> {
    return this.http.patch<ILuggage>(`${env.apiUrl}/luggages/${id}`, params);
  }

  public create(params: ICreateLuggageRequest): Observable<ILuggage> {
    return this.http.post<ILuggage>(`${env.apiUrl}/luggages`, params);
  }
}
