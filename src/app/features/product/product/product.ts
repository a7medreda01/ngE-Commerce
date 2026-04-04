import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductDetails } from '../product-details/product-details';
import { RelatedItem } from '../related-item/related-item';

@Component({
  selector: 'app-product',
  imports: [RouterLink,ProductDetails,RelatedItem],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

}
