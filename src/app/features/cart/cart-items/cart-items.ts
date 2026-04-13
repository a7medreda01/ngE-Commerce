import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart/cart-service';
import { CouponService } from '../../../services/coupon/coupon-service';

@Component({
  selector: 'app-cart-items',
  imports: [CurrencyPipe, CommonModule, FormsModule, RouterLink],
  templateUrl: './cart-items.html',
  styleUrl: './cart-items.css',
})
export class CartItems {
  items: any;
  userId: string | null = localStorage.getItem('userId');
  constructor(private cartService: CartService, private couponService: CouponService) {
    this.getCart()
  }

  getCart() {
    this.cartService.getCart().subscribe({
      next: (res: any) => {
        this.items = res
        console.log(this.items)
      },
      error: (error: any) => console.log(error)
    })
  }
  updateCart(quantity: number, productId: number) {
    const body = {
      userId: this.userId,
      productId: productId,
      quantity: quantity
    };
    this.cartService.addToCart(body).subscribe({
      next: (res: any) => {
        console.log("updated")
        this.getCart()
      },
      error: (error: any) => console.log(error)
    })
  }

  removeItem(quantity: number, productId: number) {
    const body = {
      userId: this.userId,
      productId: productId,
      quantity: quantity
    };
    this.cartService.removeFromCart(body).subscribe({
      next: (res: any) => {
        console.log("removed")
        this.getCart()
      },
      error: (error: any) => console.log(error)
    })
  }
  clearCart() {
    this.cartService.clearCart().subscribe({
      next: (res: any) => {
        console.log("cleared")
        this.getCart()
      },
      error: (error: any) => console.log(error)
    })
  }

  increment(item: any) {
    item.quantity++;
    this.updateCart(item.productId, item.quantity);
  }

  decrement(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart(item.productId, item.quantity);

    }
  }

  finalTotal!: number;
  couponResult!: any
  ApplyCoupon(code: string) {
    const body = {
      code: code,
      subTotal: this.items.totalPrice,
      shippingCost: 0
    }
    this.couponService.ApplyCoupon(body).subscribe({
      next: (res: any) => {
        this.couponResult = res
        this.finalTotal = this.couponResult.finalTotal;
        console.log(res)
      },
      error: (error: any) =>{
         this.couponResult = error.error;
        console.log(error)
      }
    })
  }
}
// discount
// :
// 20
// finalTotal
// :
// 194
// isValid
// :
// true
// message
// :
// "Coupon applied successfully"
// shippingCost
// :
// 0
// subTotal
// :
// 214
