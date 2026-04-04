import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-cancelation',
  imports: [CommonModule],
  templateUrl: './my-cancelation.html',
  styleUrl: './my-cancelation.css',
})
export class MyCancelation {
orders = [
  {
    id: 12345,
    date: 'March 25, 2026',
    items: [
      { name: 'Cake', quantity: 2, price: 20 },
    ],
    status: 'Cancelled'
  },
  {
    id: 67890,
    date: 'March 27, 2026',
    items: [
      { name: 'Book', quantity: 1, price: 50 }
    ],
    status: 'Delivered'
  }
];

// فلترة الأوردرات الملغية فقط
get cancelledOrders() {
  return this.orders.filter(o => o.status === 'Cancelled');
}

// حساب التوتال
getTotal(order: any): number {
  return order.items.reduce((sum: number, item: any) => sum + item.quantity * item.price, 0);
}
}
