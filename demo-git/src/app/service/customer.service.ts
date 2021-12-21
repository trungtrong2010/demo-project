import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../models/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  URL_API: string;

  constructor(private http: HttpClient) {
    this.URL_API = 'http://localhost:3000/customer';
  }

  getCustomerById(id: any): Observable<ICustomer>{
    return this.http.get<ICustomer>(this.URL_API + '/' + id);
  }
}
