import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../shared/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  userId: string | null = localStorage.getItem('userId');
  constructor(private http: HttpClient) { }
  getMethod(): Observable<any> {
    return this.http.get(`${environment.baseUrl}Payment/user/${this.userId}`);
  }
  addMethod(body: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}Payment`, body);
  }
  deleteMethod(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}Payment/${id}`);
  }
}
