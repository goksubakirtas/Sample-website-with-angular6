import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {NotificationsService} from 'angular2-notifications';
import {CartService} from '../cart/cart.service';
import {ActivatedRoute} from '@angular/router';
import {Pager} from '../app-pager';
import {p} from '../../../node_modules/@angular/core/src/render3';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  title = 'Products';
  products: Product[] ;
  filteredProducts: Product[] ;
  filterText: string;
  addedProduct: string;
  pager: Pager = new Pager();
  constructor(private productService: ProductService, private notificationsService: NotificationsService, private cartService: CartService, private activatedRoute: ActivatedRoute) {
  //   constructor() {
  //   this.products = ProductList;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getProducts(params['seoUrl']);
    });
  }
  getProducts(seoUrl: string) {
    this.productService.getProducts(seoUrl).subscribe(res => {
      this.products = res;
      this.pager = this.getPager(res.length);
    });
  }
  addToCart(product: Product) {
    this.addedProduct = product.productName;
    this.cartService.addToCart(product);
    this.notificationsService.success('Succesfull' , product.productName + ' added to cart!');

  }
  getPager(totalItems: number, currentPage: number= 1, pageSize: number= 3): Pager {
    const totalPages = Math.ceil(totalItems / pageSize);

    const pages: Array<number> = [];
    for (let i = 1; i <= totalPages; i++ ) {
      pages.push(i);
    }

    const  pager = new Pager();
    pager.currentPage = currentPage;
    pager.pageList = pages;
    pager.pageSize = pageSize;

    return pager;
  }
  setPage(page: number) {
    this.pager.currentPage = page;
  }

}

