import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {EstateService} from './services/estate.service';
import {UserService} from './services/user.service';
import {AlertyfyService} from './services/Alertyfy.service';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { componentFactoryName } from '@angular/compiler';
import { AuthService } from './services/auth.service';
import { PropertyDetailResolverService } from './property/property-details/property-detail-resolver.service';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { SearchFilterPipe } from './pipes/searchFilter.pipe';
import { SortFilterPipe } from './pipes/sortFilter.pipe';

const myRoutes : Routes = [
  {path : '', component : PropertyListComponent},
  {path : 'rent-property', component : PropertyListComponent},
  {path : 'add-property', component : AddPropertyComponent},
  {path : 'property-details/:id', component : PropertyDetailsComponent,
          resolve : {prp : PropertyDetailResolverService}},
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
    SearchFilterPipe,
    SortFilterPipe
   ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes, { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [EstateService,UserService,AlertyfyService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
