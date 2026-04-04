import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-items',
  imports: [CurrencyPipe,CommonModule,FormsModule ],
  templateUrl: './cart-items.html',
  styleUrl: './cart-items.css',
})
export class CartItems {
@Input() products:any;
}
