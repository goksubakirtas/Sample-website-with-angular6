import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
// import { map } from 'rxjs/operators';
//
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private logedIn = false;

  constructor(@Inject('apiUrl') private apiUrl, private http: HttpClient) { }
}
