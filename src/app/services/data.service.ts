import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/posts');
  }

  getCommentsByQuery(queryParams?: any): Observable<any> {
    let params = new HttpParams();

    if (queryParams) {
      Object.keys(queryParams).forEach((key) => {
        params = params.set(key, queryParams[key]);
      });
    }

    return this.http.get<any>(this.apiUrl + '/comments?', { params });
  }
}
