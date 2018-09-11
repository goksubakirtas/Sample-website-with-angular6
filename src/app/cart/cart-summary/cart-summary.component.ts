import {Component, DoCheck, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {b} from '@angular/core/src/render3';
import {CartItem} from '../cart-item';
import {Product} from '../../product/product';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, DoCheck {
  totalCartItem: number;
  totalCartItemPrice: number;
  cartItems: CartItem[];
  isProductRemoved = false;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.list();
  }
  ngDoCheck() {
    this.totalCartItem = this.cartService.list().reduce((a, b) => a + b.quantity, 0);
    this.totalCartItemPrice = this.cartService.list().reduce((a, b) => a + b.quantity * b.product.unitPrice, 0);
  }
  removeFromCart(product: Product) {
      this.cartService.removeFromCart(product);
      this.isProductRemoved = true;
  }

}
