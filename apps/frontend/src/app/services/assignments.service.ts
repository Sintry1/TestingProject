import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CreateAssignmentRequest,
  IAssignment,
  UpdateAssignmentRequest,
} from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {
  constructor(private http: HttpClient) {}

  public getAssignmentsWithinRange(from?: Date, to?: Date): Observable<IAssignment[]> {
    let query = '';
    if (from && to) {
      query = `?from=${from}&to=${to}`;
    } else if (from) {
      query = `?from=${from}`;
    } else if (to) {
      query = `?to=${to}`;
    }

    return this.http.get<IAssignment[]>(`${env.apiUrl}/assignments${query}`);
  }

  /**
   * Calls the API to get a list of assignments.
   *
   * @returns an observable with a list of IAssignments.
   */
  public getAssignments(createdAt: Date): Observable<IAssignment[]> {
    return this.http.get<IAssignment[]>(
      `${env.apiUrl}/assignments?createdAt=${createdAt.toISOString()}`
    );
  }

  /**
   * Calls the API to create a assignment.
   *
   * @param params - a create assignment request with all the needed info.
   * @returns an observable with created IAssignment.
   */
  public createAssignment(params: CreateAssignmentRequest): Observable<IAssignment> {
    return this.http.post<IAssignment>(`${env.apiUrl}/assignments`, params);
  }

  /**
   * Calls the API to create a assignment.
   *
   * @param id ID of the assignment to update.
   * @param params - an UpdateAssignmentRequest object to update the assignment.
   * @returns an observable with updated assignment.
   */
  public updateAssignment(id: string, params: UpdateAssignmentRequest): Observable<IAssignment> {
    return this.http.patch<IAssignment>(`${env.apiUrl}/assignments/${id}`, params);
  }

  /**
   * Calls the API to fetch an assignment by ID.
   *
   * @param id - the ID of the assignment.
   * @returns an observable with the requested assignment.
   */
  public getAssignmentById(id: string): Observable<IAssignment> {
    return this.http.get<IAssignment>(`${env.apiUrl}/assignments/${id}`);
  }
}
