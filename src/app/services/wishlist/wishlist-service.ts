import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../shared/environment/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  userId: string | null = localStorage.getItem('userId');
  private wishlistCount = new BehaviorSubject<number>(0);
  wishlistCount$ = this.wishlistCount.asObservable();
  private wishlistItems = new BehaviorSubject<any[]>([]);
  wishlistItems$ = this.wishlistItems.asObservable();

  constructor(private http: HttpClient) {
    this.updateWishlistCount();
  }
  getWishlist(): Observable<any> {
    return this.http.get(`${environment.baseUrl}Wishlist/${this.userId}`);
  }
  //add
addToWishlist(data: any) {
  return this.http.post(`${environment.baseUrl}Wishlist/update`, data).pipe(
    tap(() => {

      const currentItems = this.wishlistItems.value;

      const newItem = {
        product: {
          id: data.productId
        }
      };

      // منع التكرار (مهم جدًا)
      const exists = currentItems.some(
        i => i.product.id === data.productId
      );

      if (!exists) {
        this.wishlistItems.next([...currentItems, newItem]);
        this.wishlistCount.next(currentItems.length + 1);
      }
    })
  );
}
  //remove
  removeFromWishlist(data: any) {
    return this.http.put(`${environment.baseUrl}Wishlist/removeItem`, data).pipe(
      tap(() => {
        const currentItems = this.wishlistItems.value;

        const updatedItems = currentItems.filter(
          item => item.productId !== data.productId
        );

        this.wishlistItems.next(updatedItems);
        this.wishlistCount.next(updatedItems.length);
      })
    );
  }
  //clear
  clearWishlist() {
    return this.http.delete(`${environment.baseUrl}Wishlist/clearWishlist?Uid=${this.userId}`, {}).pipe(
      tap(() => this.updateWishlistCount())
    );
  }
  //move to cart
  moveToCart() {
    return this.http.post(`${environment.baseUrl}Wishlist/moveCart?Uid=${this.userId}`, {});
  }

  updateWishlist() {
    this.getWishlist().subscribe({
      next: (res: any) => {
        const items = res?.items || [];

        this.wishlistItems.next(items);
        this.wishlistCount.next(items.length);
      },
      error: () => {
        this.wishlistItems.next([]);
        this.wishlistCount.next(0);
      }
    });
  }
  // update count
  updateWishlistCount() {
    this.getWishlist().subscribe({
      next: (wishlist: any) => {
        this.wishlistCount.next(wishlist?.items?.length || 0);
        this.wishlistItems.next(wishlist.items);

      },
      error: () => {
        this.wishlistCount.next(0);
      }
    });
  }
}