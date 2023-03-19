import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CarSortOptions,
  CreateCarRequest,
  ICar,
  IGetCarByIdResponse,
  SortOrder,
  UpdateCarRequest,
} from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  public getCarsWithinRange(from?: string, to?: string): Observable<ICar[]> {
    let query = '';
    if (from && to) {
      query = `?from=${from}&to=${to}`;
    } else if (from) {
      query = `?from=${from}`;
    } else if (to) {
      query = `?to=${to}`;
    }

    return this.http.get<ICar[]>(`${env.apiUrl}/cars/all${query}`);
  }

  public getCar(
    createdAt: Date,
    sortBy?: CarSortOptions,
    sortOrder?: SortOrder,
    search?: string
  ): Observable<ICar[]> {
    return this.http.get<ICar[]>(
      `${
        env.apiUrl
      }/cars?createdAt=${createdAt.toISOString()}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`
    );
  }

  public getById(id: string) {
    return this.http.get<IGetCarByIdResponse>(`${env.apiUrl}/cars/${id}`);
  }

  public createCar(params: CreateCarRequest): Observable<ICar> {
    return this.http.post<ICar>(`${env.apiUrl}/cars`, params);
  }

  public updateCar(id: string, params: UpdateCarRequest): Observable<ICar> {
    return this.http.patch<ICar>(`${env.apiUrl}/cars/${id}`, params);
  }

  public getCarById(id: string): Observable<ICar> {
    return this.http.get<ICar>(`${env.apiUrl}/cars/${id}`);
  }
}
