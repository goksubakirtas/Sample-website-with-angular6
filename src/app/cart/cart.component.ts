import { Component, OnInit } from '@angular/core';
import {CartService} from './cart.service';
import {CartItem} from './cart-item';
import {Product} from '../product/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  cartItems: CartItem[] = [];
  isProductRemoved = false;
  ngOnInit() {
    this.getCarts();
  }
  getCarts() {
    this.cartItems = this.cartService.list();
  }
  removeFromCart(product: Product) {
    if (confirm('Are you sure? ')) {
      this.cartService.removeFromCart(product);
      this.isProductRemoved = true;
    }
  }
}
