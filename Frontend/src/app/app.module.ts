import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {EstateService} from './services/estate.service';
import {UserService} from './services/user.service';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { componentFactoryName } from '@angular/compiler';

const myRoutes : Routes = [
  {path : '', component : PropertyListComponent},
  {path : 'rent-property', component : PropertyListComponent},
  {path : 'add-property', component : AddPropertyComponent},
  {path : 'property-details/:id', component : PropertyDetailsComponent},
  {path : 'user-login', component : UserLoginComponent},
  {path : 'user-register', component : UserRegisterComponent},
  {path : '**', component : PropertyListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    NavBarComponent,
    PropertyDetailsComponent,
    UserLoginComponent,
    UserRegisterComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [EstateService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
