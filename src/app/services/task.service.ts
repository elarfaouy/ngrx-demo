import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskInterface} from "../state/tasks/task.interface";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url: string = "http://localhost:8080/tasks";

  constructor(private _http: HttpClient) { }

  getTasks(): Observable<TaskInterface[]>{
    return this._http.get<TaskInterface[]>(this.url);
  }

  saveTask(task: TaskInterface): Observable<TaskInterface>{
    return this._http.post<TaskInterface>(this.url, task);
  }
}
