import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
@Input() product:any;

//calculate rating of product 
fullStars: number[] = [];
  halfStar: boolean = false;
  emptyStars: number[] = [];

  ngOnInit() {
    const full = Math.floor(this.product.rating);
    const hasHalf = this.product.rating % 1 >= 0.5;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    this.fullStars = Array(full);
    this.halfStar = hasHalf;
    this.emptyStars = Array(empty);
  }
}