import { Component, Input } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-four-product',
  imports: [ProductCard,CommonModule],
  templateUrl: './four-product.html',
  styleUrl: './four-product.css',
})
export class FourProduct {
@Input() products:any;
}
