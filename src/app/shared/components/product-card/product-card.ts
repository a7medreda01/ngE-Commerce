import { CommonModule } from '@angular/common';
import { Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart/cart-service';
import { WishlistService } from '../../../services/wishlist/wishlist-service';
import { Observable, map, take } from 'rxjs';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard implements OnInit, OnChanges {

  @Input() product: any;

  userId: string | null = localStorage.getItem('userId');

  isInWishlist$!: Observable<boolean>;

  addedCart = false;

  // ⭐ rating
  fullStars: number[] = [];
  halfStar: boolean = false;
  emptyStars: number[] = [];

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  // =========================
  // INIT
  // =========================
  ngOnInit(): void {

    this.isInWishlist$ = this.wishlistService.wishlistItems$.pipe(
      map(items =>
        items.some(i => i.product.id === this.product.id)
      )
    );
  }

  // =========================
  // INPUT CHANGES (rating only)
  // =========================
  ngOnChanges(changes: SimpleChanges) {
    const full = Math.floor(this.product.rating);
    const hasHalf = this.product.rating % 1 >= 0.5;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    this.fullStars = Array(full);
    this.halfStar = hasHalf;
    this.emptyStars = Array(empty);
  }

  // =========================
  // CART
  // =========================
  addToCart(productId: any) {
    const body = {
      userId: this.userId,
      productId,
      quantity: 1
    };

    this.cartService.addToCart(body).subscribe({
      next: () => {
        this.addedCart = true;
        setTimeout(() => this.addedCart = false, 2000);
      }
    });
  }

  // =========================
  // WISHLIST TOGGLE
  // =========================
  toggleWishlist() {

    const body = {
      userId: this.userId,
      productId: this.product.id
    };

    this.isInWishlist$
      .pipe(take(1))
      .subscribe(isIn => {

        if (isIn) {
          this.wishlistService.removeFromWishlist(body).subscribe();
        } else {
          this.wishlistService.addToWishlist(body).subscribe();
        }

      });
  }
}
