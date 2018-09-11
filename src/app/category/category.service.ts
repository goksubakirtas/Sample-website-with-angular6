import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient, @Inject('apiURL') private apiURL) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURL + '/categories');
  }
}
