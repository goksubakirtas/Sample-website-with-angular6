import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';


import {SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CartService} from './cart/cart.service';
import { VatAddedPipe } from './product/vat-added.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '' , redirectTo: 'products', pathMatch: 'full'},
  {path: 'products' , component: ProductComponent},
  {path: 'products/:seoUrl' , component: ProductComponent},
  {path: 'my-cart' , component: CartComponent},
  {path: 'shipping-detail' , component: ShippingDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    SimpleNotificationsModule.forRoot()
  ],
  exports: [],
  providers: [
    {provide: 'apiURL', useValue: 'http://northwindapi.azurewebsites.net/api'},
    NotificationsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
