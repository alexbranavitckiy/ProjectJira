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
    return this.http.put<Task>('api/task/' + task.idTask, task);
  }

  getPageTask(page: number, size: number, sort: string, direction: string): Observable<any> {
    return this.http.get<any>('/api/task/page?page=' + page
      + "&size=" + size
      + "&sort=" + sort
      + "&direction=" + direction);
  }

  getAllByAssignee(idUser: number): Observable<Task[]> {
    return this.http.get<Task[]>('api/task/assignee?user=' + idUser);
  }

  getOpenForTestTasks():Observable<Task[]>{
    return this.http.get<Task[]>('api/task/openForTest');
  }

  getAllByReporter(idUser: number): Observable<Task[]> {
    return this.http.get<Task[]>('api/task/reporter?user=' + idUser);
  }

  getAllStatus(): Observable<Status[]> {
    return this.http.get<Status[]>('http://localhost:8080/api/status/all');
  }
}
