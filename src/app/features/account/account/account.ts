import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-account',
  imports: [RouterLink,RouterOutlet,Sidebar],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {

  constructor(private router: Router) {}
ngOnInit() {
  this.router.navigate(['/account/edit']);
}
}
