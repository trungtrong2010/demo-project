import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {ICustomer} from '../../models/ICustomer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: ICustomer;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private service: CustomerService) { }

  ngOnInit(): void {
    let id;
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        id = paramMap.get('id');
        this.service.getCustomerById(id).subscribe(
          (data) => {
            this.customer = data;
          }
        );
      }
    );
  }
}
