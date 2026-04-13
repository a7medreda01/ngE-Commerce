import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductDetails } from '../product-details/product-details';
import { RelatedItem } from '../related-item/related-item';
import { CartService } from '../../../services/cart/cart-service';
import { ProductService } from '../../../services/product/product-service';

@Component({
  selector: 'app-product',
  imports: [RouterLink,ProductDetails,RelatedItem],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  // product!:any;
    constructor(private route: ActivatedRoute, private service: ProductService,private cartService: CartService,
    private router:Router
  ) { }



}
