import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { About } from './about/about.component';
import { DashBoard } from './dashBoard/dashBoard.component';
import { ContactUs } from './contactUs/contactUs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ViewItemDetailsComponent } from './view-item-details/view-item-details.component';
import { ViewItemListComponent } from './view-item-list/view-item-list.component';
import { ExpiredItemListComponent } from './expired-item-list/expired-item-list.component';
import { ExpiredItemDetailsComponent } from './expired-item-details/expired-item-details.component';
import {InvoiceComponent} from './invoice/invoice.component';
import {PrintLayoutComponent} from './print-layout/print-layout.component';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'dashBoard', component: DashBoard },
  { path: 'register', component: CreateEmployeeComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'newItem', component: ItemDetailsComponent },
  { path: 'viewItemDetails', component: ViewItemListComponent },
  { path: 'expiredItemDetails', component: ExpiredItemListComponent },
  { path: 'about', component: About },
  { path: 'contactUs', component: ContactUs },
  { path: 'appComponent', component: AppComponent },
  {path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoiceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
