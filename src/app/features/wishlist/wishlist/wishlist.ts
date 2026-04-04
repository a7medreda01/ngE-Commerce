import { Component } from '@angular/core';
import { Items } from '../items/items';
import { JustForYou } from '../just-for-you/just-for-you';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  imports: [Items,JustForYou,CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
products: any[] = [
  {
    name: 'HeadPhone',
    price: 20,
    oldPrice: 30,
    rating: 4.5,
    image: 'assets/images/products/p2.png',
    sale: 30
  },
  {
    name: 'Products Four',
    price: 25,
    oldPrice: 35,
    rating: 3.5,
    image: 'assets/images/products/p5.png',
    sale: 28
  },
  {
    name: 'Product Num5',
    price: 15,
    oldPrice: 20,
    rating: 4,
    image: 'assets/images/products/p1.png',
    sale: 25
  },
  {
    name: 'Hair Device',
    price: 18,
    oldPrice: 30,
    rating: 5,
    image: 'assets/images/products/p4.png',
    sale: 40
  },
  {
    name: 'Airpods',
    price: 22,
    oldPrice: 30,
    rating: 4.2,
    image: 'assets/images/products/p3.png',
    sale: 27
  }
];

}
