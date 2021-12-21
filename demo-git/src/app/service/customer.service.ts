import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../models/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getAllCustomer(): Observable<ICustomer[]>{
    return this.httpClient.get<ICustomer[]>('http://localhost:3000/customer');
  }
}
