import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient, @Inject('apiURL') private apiURL) { }

  getProducts(seoUrl: string): Observable<Product[]> {
    if (seoUrl) {
      return this.http.get<Product[]>(this.apiURL + '/products/' + seoUrl );
    } else {
      return this.http.get<Product[]>(this.apiURL + '/products');
    }

  }
}
