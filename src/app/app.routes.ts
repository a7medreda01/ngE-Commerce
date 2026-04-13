import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './features/home/home/home';
import { Wishlist } from './features/wishlist/wishlist/wishlist';
import { Cart } from './features/cart/cart/cart';
import { CheckOut } from './features/checkOut/check-out/check-out';
import { Account } from './features/account/account/account';
import { EditProfile } from './features/account/edit-profile/edit-profile';
import { AddressBook } from './features/account/address-book/address-book';
import { PaymentOptions } from './features/account/payment-options/payment-options';
import { MyOrders } from './features/account/my-orders/my-orders';
import { MyCancelation } from './features/account/my-cancelation/my-cancelation';
import { Items } from './features/wishlist/items/items';
import { Product } from './features/product/product/product';
import { Errorpage } from './features/errorpage/errorpage';
import { Register } from './features/register/register';
import { Login } from './features/login/login';
import { About } from './features/about/about/about';
import { Products } from './features/products/products/products';
import { OrderSuccess } from './features/checkOut/order-success/order-success';
import { Order } from './features/account/my-orders/order/order';
import { authGuard, guestGuard } from './core/guards/guards-guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home }
    ]
  },
  // { path: 'wishlist', component: Wishlist },
  // { path: 'cart', component: Cart },
  { path: 'cart/checkOut', component: CheckOut },
  { path: 'account', component: Account },
  { path: 'home', component: MainLayout },
  {
    path: 'account',
    component: Account,
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: EditProfile,canActivate: [authGuard] },
      { path: 'address', component: AddressBook },
      { path: 'payment', component: PaymentOptions },
      { path: 'my-orders', component: MyOrders },
      { path: 'cancel', component: AddressBook },
      { path: 'wishlist', component: Wishlist },
      { path: 'my-cancelation', component: MyCancelation },
      { path: 'wish-items', component: Wishlist }
    ]
  },
  { path: 'product/:id', component: Product },
  { path: 'order/:id', component: Order },
  { path: 'products/:type', component: Products },
  // { path: 'register', component: Register },
  // { path: 'login', component: Login },
  { path: 'about', component: About },
  { path: 'products', component: Products },
  { path: 'order-success', component: OrderSuccess },
  //   صفحات لازم login
  { path: 'profile',component: Account,canActivate: [authGuard]},
  { path: 'cart',component: Cart,canActivate: [authGuard]},
  { path: 'wishlist',component: Wishlist,canActivate: [authGuard]},

  //   صفحات للزوار بس
  {path: 'login',component: Login,canActivate: [guestGuard]},
  {path: 'register',component: Register,canActivate: [guestGuard]},
  { path: '**', component: Errorpage },

];
