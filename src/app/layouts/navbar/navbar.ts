import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {


//from service of backend later
wishLength: number=5;
cartLength: number=3;

//to header text
topText :string= "Summer Sale For All Swim And Free Express Delivery - OFF 50%! ";

//options language
selectedOption: string = '';
options = ['English', 'عربي'];

select(option: string) {
  this.selectedOption = option;
}

logout() {
  console.log('User logged out');
  localStorage.removeItem('token');
  // Redirect to home page أو login
}


showSearch = false;

toggleSearch() {
  this.showSearch = !this.showSearch;
}

}
