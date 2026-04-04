import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  imports: [CommonModule],
  templateUrl: './my-orders.html',
  styleUrl: './my-orders.css',
})
export class MyOrders {
orders = [
  {
    id: 12345,
    date: 'March 25, 2026',
    items: [
      { name: 'Cake', quantity: 2, price: 20 },
      { name: 'Cookie', quantity: 5, price: 5 }
    ],
    status: 'Delivered'
  },
  {
    id: 67890,
    date: 'March 27, 2026',
    items: [
      { name: 'Book', quantity: 1, price: 50 }
    ],
    status: 'Pending'
  }
];

  getTotal(order: any): number {
    return order.items.reduce((sum: number, item: any) => sum + item.quantity * item.price, 0);
  }
  getItemsText(order: any): string {
    return order.items.map((i: any) => `${i.name} x${i.quantity}`).join(', ');
  }
  getStatusClass(status: string) {
  switch(status) {
    case 'Delivered':
      return 'bg-success';   // أخضر
    case 'Pending':
      return 'bg-warning text-dark';   // أصفر
    case 'Shipped':
      return 'bg-info text-dark';   // أزرق فاتح
    case 'Cancelled':
      return 'bg-danger';   // أحمر
    default:
      return 'bg-secondary';
  }
}

}
