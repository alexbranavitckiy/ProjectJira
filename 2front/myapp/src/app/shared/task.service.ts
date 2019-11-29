import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Task} from "../model/task";
import {Status} from "../model/status";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>('api/task/all');
  }

  getById(id: string): Observable<Task> {
    return this.http.get<Task>('api/task/' + id);
  }

  saveTask(task: Task): Observable<Task> {
    return this.http.post<Task>('http://localhost:8081/api/task', task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>('api/task/' + task.id, task);
  }
}
