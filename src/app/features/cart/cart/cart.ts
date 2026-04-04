import { Component } from '@angular/core';
import { CartItems } from '../cart-items/cart-items';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CartItems, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  products: any[] = [
    {
      id:1,
      name: 'Headphone Orange',
      price: 20,
      oldPrice: 30,
      rating: 4.5,
      image: 'assets/images/products/p2.png',
      sale: 30,
      quantity: 2,
    },
    {
      id:2,
      name: 'HeadPhone',
      price: 25,
      oldPrice: 35,
      rating: 3.5,
      image: 'assets/images/products/p3.png',
      sale: 28,
      quantity: 2,

    },
    {
      id:3,
      name: 'Product Accessory',
      price: 25,
      oldPrice: 35,
      rating: 3.5,
      image: 'assets/images/products/p4.png',
      sale: 28,
      quantity: 1,

    }
  ];
}
