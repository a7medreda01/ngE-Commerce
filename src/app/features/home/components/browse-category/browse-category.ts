import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-browse-category',
  imports: [CommonModule],
  templateUrl: './browse-category.html',
  styleUrl: './browse-category.css',
})
export class BrowseCategory {
categories = [
  { id: 1, name: 'Electronics', icon: 'bi bi-phone' },
  { id: 2, name: 'Fashion', icon: 'bi bi-bag' },
  { id: 4, name: 'Beauty', icon: 'bi bi-heart' },
  { id: 4, name: 'Gaming', icon: 'bi bi-play' },
  { id: 4, name: 'headPhones', icon: 'bi bi-headphones' },
  { id: 5, name: 'Sports', icon: 'bi bi-bicycle' }
];
}
