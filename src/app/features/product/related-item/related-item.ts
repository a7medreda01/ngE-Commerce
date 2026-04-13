import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { ProductService } from '../../../services/product/product-service';
import { FourProduct } from '../../../shared/components/four-product/four-product';

@Component({
  selector: 'app-related-item',
  imports: [CommonModule,ProductCard],
  templateUrl: './related-item.html',
  styleUrl: './related-item.css',
})
export class RelatedItem {
  products:any;
  constructor(private service :ProductService ){
    this.getAllProducts()
  }
  getAllProducts(){
    this.service.getProductByTypeSort("best").subscribe({
      next : (res:any)=>{
        this.products = res
        console.log(this.products)
      },
      error : (error)=> console.log(error)
    })
  }
  
}
