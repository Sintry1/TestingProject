import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExportDataDto } from '@omnihost/interfaces';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor(private http: HttpClient) {}

  /**
   * Export the data and email it attached as a CSV.
   */
  public exportData(tableName: string, params: ExportDataDto) {
    return this.http.post(`${env.apiUrl}/export/${tableName}`, params);
  }
}
