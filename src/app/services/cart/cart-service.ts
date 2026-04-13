import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../shared/environment/environment.prod';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  userId: string | null = localStorage.getItem('userId');
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();


  constructor(private http: HttpClient) {
  this.updateCartCount();
  }
  getCart(): Observable<any> {
    return this.http.get(`${environment.baseUrl}Cart/${this.userId}`);
  }
  //add
  addToCart(data: any) {
    return  this.http.post(`${environment.baseUrl}Cart/update`, data).pipe(
    tap(() => this.updateCartCount())
  );
  }
  //remove
  removeFromCart(data: any) {
    return this.http.put(`${environment.baseUrl}Cart/removeItem`, data).pipe(
    tap(() => this.updateCartCount())
  );
  }
  //clear
  clearCart() {
    return this.http.delete(`${environment.baseUrl}Cart/clearCart?Uid=${this.userId}`, {}).pipe(
    tap(() => this.updateCartCount())
  );
  }


  // update count
  updateCartCount() {
    this.getCart().subscribe({
      next: (cart: any) => {
        this.cartCount.next(cart.items.length);
      }
    });
  }
}
