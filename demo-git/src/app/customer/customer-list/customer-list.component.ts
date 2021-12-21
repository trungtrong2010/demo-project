import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ICustomer} from '../../models/ICustomer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: ICustomer[];
  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(
      (data) => {this.customerList = data; });
  }
}
