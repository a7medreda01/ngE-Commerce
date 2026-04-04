import { Component } from '@angular/core';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-just-for-you',
  imports: [ProductCard ,CommonModule],
  templateUrl: './just-for-you.html',
  styleUrl: './just-for-you.css',
})
export class JustForYou {
 product: any = {
    name: 'Cake',
    price: 20,
    oldPrice: 30,
    rating: 4,
    image: 'assets/images/banner4.jpg'
  }

}
