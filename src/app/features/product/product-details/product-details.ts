import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product-service';
import { Product } from '../../../models/product-model';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  product!: Product;
  specsText!: string;
  specsArray!: string[]
  constructor(private route: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
    this.GetProduct();

    //ratineg
    const full = Math.floor(this.product.rating);
    const hasHalf = this.product.rating % 1 >= 0.5;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    this.fullStars = Array(full);
    this.halfStar = hasHalf;
    this.emptyStars = Array(empty);

  }

  GetProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getProductById(id).subscribe({
      next: (res) => {
        this.product = res;
        console.log(this.product)
            this.specsText = this.product.details
    this.specsArray = this.specsText.split('.').filter(x => x.trim() !== '');
    console.log("specsArray")
    console.log(this.specsArray)
      },
      error: (err) => console.error(err)
    });
  }


  //calculate rating of product 
  fullStars: number[] = [];
  halfStar: boolean = false;
  emptyStars: number[] = [];



  //design
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';

  colors = ['bg-dark', 'bg-danger'];
  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  selectImage(img: string) {
    this.selectedImage = img;
  }

  increase() {
    this.product.quantity++;
  }

  decrease() {
    if (this.product.quantity > 1) {
      this.product.quantity--;
    }
  }
}
