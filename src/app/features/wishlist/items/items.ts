import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../../services/wishlist/wishlist-service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-items',
  imports: [ProductCard,AsyncPipe],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items implements OnInit {

  wishlistItems$!: Observable<any[]>;
  length :number =0
  userId: string | null = localStorage.getItem('userId');

  constructor(
    private wishlistService: WishlistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.wishlistItems$ = this.wishlistService.wishlistItems$;
    this.wishlistService.updateWishlist();
    this.wishlistService.wishlistCount$.subscribe({
      next:(re:any)=>this.length=re
    })
  }

  removeItem(productId: number) {
    const body = {
      userId: this.userId,
      productId: productId,
      quantity: 1
    };

    this.wishlistService.removeFromWishlist(body).subscribe({
      next: () => console.log('removed'),
      error: err => console.log(err)
    });
  }

  toggleItem(productId: number) {
    const body = {
      userId: this.userId,
      productId: productId,
      quantity: 1
    };

    this.wishlistItems$
      .pipe(take(1))
      .subscribe(items => {
        const exists = items.some(
          (item: any) => item.product.id === productId
        );

        if (exists) {
          this.wishlistService.removeFromWishlist(body).subscribe();
        } else {
          this.wishlistService.addToWishlist(body).subscribe();
        }
      });
  }

  clearWishlist() {
    this.wishlistService.clearWishlist().subscribe({
      next: () => console.log('cleared'),
      error: err => console.log(err)
    });
  }

  moveToCart() {
    this.wishlistService.moveToCart().subscribe({
      next: () => this.router.navigate(['/cart']),
      error: err => console.log(err)
    });
  }
}