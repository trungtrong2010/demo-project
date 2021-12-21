import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';


const routes: Routes = [
  {path: 'list', component: CustomerListComponent},
  {path: 'detail', component: CustomerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
