import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../../services/cart/cart-service';

@Component({
  selector: 'app-order-details',
  imports: [CurrencyPipe],
  templateUrl: './order-details.html',
  styleUrl: './order-details.css',
})
export class OrderDetails {
  items: any;
  userId: string | null = localStorage.getItem('userId');
  constructor(private cartService: CartService) {
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
}
