import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employeeList/employeeList.component';
import { EmployeeComponent } from './employee/employee.component';
import { NoPageFoundComponent } from './noPageFound/noPageFound.component';

import { TestComponent } from './test/test.component';

import { EmployeeService } from './employeeList/employee.service';

const appRoute : Routes = [
  { path:'home', component:HomeComponent },
  { path:'employee', component:EmployeeListComponent },
  { path:'employee/:id', component:EmployeeComponent },
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'**', component:NoPageFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeComponent,
    NoPageFoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute), HttpModule, FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
