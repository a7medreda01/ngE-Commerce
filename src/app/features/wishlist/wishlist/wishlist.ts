import { Component } from '@angular/core';
import { Items } from '../items/items';
import { JustForYou } from '../just-for-you/just-for-you';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  imports: [Items,JustForYou,CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {

}
