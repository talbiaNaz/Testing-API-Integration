import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicsService {

  urlPath='https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }

  getDate():Observable<any>
  {
    return this.http.get<any>(this.urlPath);
  }

  getPostData(id:number):Observable<any>
  {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

  }

  getTodoData(id:number):Observable<any>
  {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
  }
}
