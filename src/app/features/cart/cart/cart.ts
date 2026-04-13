import { Component, SimpleChanges } from '@angular/core';
import { CartItems } from '../cart-items/cart-items';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart/cart-service';

@Component({
  selector: 'app-cart',
  imports: [CartItems],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  constructor(private cartService:CartService){
  }


}
