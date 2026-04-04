import { Component, Input, } from '@angular/core';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  imports: [ProductCard,CommonModule],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {
@Input() products:any;
}
