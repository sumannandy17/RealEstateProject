import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {EstateService} from './services/estate.service';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';

const myRoutes : Routes = [
  {path : '', component : PropertyListComponent},
  {path : 'property-list', component : PropertyListComponent},
  {path : 'add-property', component : AddPropertyComponent},
  {path : 'property-details/:id', component : PropertyDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
      NavBarComponent,
      PropertyDetailsComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [EstateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
