import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertyfyService } from '../services/Alertyfy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router : Router, private alerty : AlertyfyService) { }

  ngOnInit() {
  }
  loggedinUser : string;
  loggedIn(){
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  Logout(){
    this.router.navigateByUrl('/');
    localStorage.removeItem('token');
    this.alerty.success('Successfully LoggedOut');
  }
}
