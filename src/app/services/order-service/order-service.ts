import { Injectable } from '@angular/core';
import { environment } from '../../shared/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) { }
  userId: string | null = localStorage.getItem('userId');

  createOrder(order:any): Observable<any> {
    console.log(order)
    return this.http.post(`${environment.baseUrl}orders/create`, order);
  }
  getUserOrders() {
  return this.http.get<any[]>(`${environment.baseUrl}orders/user/${this.userId}`);
}
  getUserOrderId(id:any) {
  return this.http.get(`${environment.baseUrl}orders/${id}`);
}
  // Cancel order
  cancelOrder(orderId: number): Observable<any> {
    return this.http.put(`${environment.baseUrl}orders/cancel/${orderId}`, {}); 
  }
}
