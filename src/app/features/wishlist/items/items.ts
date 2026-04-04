import { Component, Input } from '@angular/core';
import { ProductCard } from '../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-items',
  imports: [ProductCard],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {
@Input() products:any;
}
