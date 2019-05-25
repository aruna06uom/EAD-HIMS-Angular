import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { About } from './about/about.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DashBoard } from './dashBoard/dashBoard.component';
import { ContactUs } from './contactUs/contactUs.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LoginComponent } from './login/login.component';
import { ViewItemDetailsComponent } from './view-item-details/view-item-details.component';
import { ExpiredItemDetailsComponent } from './expired-item-details/expired-item-details.component';
import { ViewItemListComponent } from './view-item-list/view-item-list.component';
import { ExpiredItemListComponent } from './expired-item-list/expired-item-list.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [
    AppComponent,
    About,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    DashBoard,
    ContactUs,
    EmployeeListComponent,
    HeaderComponent,
    FooterComponent,
    ItemDetailsComponent,
    LoginComponent,
    ViewItemDetailsComponent,
    ExpiredItemDetailsComponent,
    ViewItemListComponent,
    ExpiredItemListComponent,
    PrintLayoutComponent,
    InvoiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
