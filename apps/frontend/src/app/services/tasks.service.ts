import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetTasks, ITask, IUpdateTask } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch all tasks
   *
   * @returns an observable with the tasks for the given day.
   */
  public getTasks(createdAt: Date): Observable<IGetTasks> {
    return this.http.get<IGetTasks>(
      `${env.apiUrl}/tasks?createdAt=${createdAt.toISOString()}&sortBy=time&sortOrder=ASC`
    );
  }

  public getTaskById(id: string): Observable<ITask> {
    return this.http.get<ITask>(`${env.apiUrl}/tasks${id}`);
  }

  public updateTask(id: string, params: IUpdateTask): Observable<ITask> {
    return this.http.patch<ITask>(`${env.apiUrl}/tasks/${id}`, params);
  }
}
