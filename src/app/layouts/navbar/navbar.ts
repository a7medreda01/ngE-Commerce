import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart/cart-service';
import { FormsModule, NgModel } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { WishlistService } from '../../services/wishlist/wishlist-service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  wishLength: number = 0;
 cartCount: number = 0;

constructor(private cartService: CartService,private router :Router,
  private wishlistService :WishlistService) {
}
    private searchSubject = new Subject<string>();

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
        this.wishlistService.wishlistCount$.subscribe(count => {
      this.wishLength = count;
    });


    this.searchSubject.pipe(
      debounceTime(500), 
      distinctUntilChanged() 
    ).subscribe(value => {
      this.router.navigate([], {
        queryParams: { search: value },
        queryParamsHandling: 'merge'
      });
    });
  }

  onSearchChange(event: any) {
    const value = event.target.value;
    this.searchSubject.next(value);
  }
  searchText!:string
 onSearch() {
    this.router.navigate(['/products'], {
      queryParams: {
        search: this.searchText
      },
        queryParamsHandling: 'merge'
    });
  }


  topText: string = "Summer Sale For All Swim And Free Express Delivery - OFF 50%! ";

  //options language
  selectedOption: string = '';
  options = ['English', 'عربي'];

  select(option: string) {
    this.selectedOption = option;
  }


  showSearch = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
        this.router.navigate(['/login']);
  }
isLoggedIn(): boolean {
  return !!localStorage.getItem('token');
}
}
