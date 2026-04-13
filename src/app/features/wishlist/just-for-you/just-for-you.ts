import { Component } from '@angular/core';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product-service';

@Component({
  selector: 'app-just-for-you',
  imports: [ProductCard ,CommonModule],
  templateUrl: './just-for-you.html',
  styleUrl: './just-for-you.css',
})
export class JustForYou {
products:any;
constructor(private productService:ProductService){this.getProducts()}

getProducts(){
  this.productService.getAllProducts().subscribe({
    next:(res:any)=>this.products=res,
    error:(error:any)=>console.log(error)
  })
}
}
