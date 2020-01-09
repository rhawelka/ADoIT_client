import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Task} from "../models/task";


@Injectable()
export class TasksService{

  constructor(private _http: HttpClient){}

  getTasks(): Observable<Task[]>{
    return this._http.get<Task[]>("/tasks")
  }

  addTask(task: Task): Observable<Task>{
    return this._http.post<Task>("/tasks", task);
  }

  deleteTask(id: Number):Observable<{}>{
    const url = `/tasks/${id}`;
    return this._http.delete(url);
  }

  updateTask(task: Task): Observable<Task>{
    return this._http.put<Task>(`tasks/${task.id}`,task);
  }

}
