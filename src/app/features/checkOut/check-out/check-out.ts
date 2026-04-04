import { Component } from '@angular/core';
import { Billing } from '../billing/billing';
import { OrderDetails } from '../order-details/order-details';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-out',
  imports: [RouterLink,Billing,OrderDetails],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css',
})
export class CheckOut {

}
