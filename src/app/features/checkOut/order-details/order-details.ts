import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  imports: [CurrencyPipe],
  templateUrl: './order-details.html',
  styleUrl: './order-details.css',
})
export class OrderDetails {
  products: any[] = [
    {
      name: 'Poduct Orignal',
      price: 20,
      oldPrice: 30,
      rating: 4.5,
      image: 'assets/images/products/p2.png',
      sale: 30,
      quantity: 2,
    },
    {
      name: 'Headphone',
      price: 25,
      oldPrice: 35,
      rating: 3.5,
      image: 'assets/images/products/p3.png',
      sale: 28,
      quantity: 2,

    },
    {
      name: 'HairDevice',
      price: 25,
      oldPrice: 35,
      rating: 3.5,
      image: 'assets/images/products/p4.png',
      sale: 28,
      quantity: 1,

    }
  ];
}
