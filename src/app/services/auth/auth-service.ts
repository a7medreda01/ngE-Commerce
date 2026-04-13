import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../shared/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

register(data: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}Auth/register`,data)
  }
  login(data: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}Auth/login`,data)
  }
}