import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product/product-service';
import { Product } from '../../../models/product-model';
import { CartService } from '../../../services/cart/cart-service';
import { ProductFaqs } from '../../../shared/components/product-faqs/product-faqs';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,ProductFaqs,NgClass],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
 product!: Product;
  specsText!: string;
  specsArray!: string[]
  constructor(private route: ActivatedRoute, private service: ProductService,private cartService: CartService,
    private router:Router
  ) { }

  ngOnInit() {

      this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    this.getProduct(id);
    this.selectedImage=''

  });

    //ratineg
    const full = Math.floor(this.product.rating);
    const hasHalf = this.product.rating % 1 >= 0.5;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    this.fullStars = Array(full);
    this.halfStar = hasHalf;
    this.emptyStars = Array(empty);

  }
getProduct(id: number) {
  this.service.getProductById(id).subscribe({
    next: (res) => {
      this.product = res;
      this.reviews=res.reviews
      this.calculateAverage();
          this.specsText = this.product.details
    this.specsArray = this.specsText.split('.').filter(x => x.trim() !== '');
          window.scrollTo({ top: 0, behavior: 'smooth' });
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



  
    userId: string | null = localStorage.getItem('userId');
    addToCart(productId: any ,quantity:number) {
      const body = {
        userId: this.userId,
        productId: productId,
        quantity: quantity
      };
      this.cartService.addToCart(body).subscribe({
        next: (res) => {
          console.log('Added to cart', res);
          this.router.navigate(['cart'])
          setTimeout(() => {
          }, 2000);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }


    //reviews 
    reviews: any[] = [];
averageRating: number = 0;
starsArray = [1, 2, 3, 4, 5];

calculateAverage() {
  if (!this.reviews.length) return;

  let total = 0;

  this.reviews.forEach(r => {
    const avg = (r.quality + r.design + r.usability + r.durability + r.valueForMoney) / 5;
    total += avg;
  });

  this.averageRating = total / this.reviews.length;
}

getRatingItems(review: any) {
  return [
    { label: 'Quality', value: review.quality },
    { label: 'Design', value: review.design },
    { label: 'Usability', value: review.usability },
    { label: 'Durability', value: review.durability },
    { label: 'Value', value: review.valueForMoney }
  ];
}
}
