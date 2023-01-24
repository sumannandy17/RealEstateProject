import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertyfyService } from 'src/app/services/Alertyfy.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private myAuth : AuthService, private alert : AlertyfyService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(myForm : NgForm){
    if(myForm.valid){
      //console.log(myForm.value);
      const token = this.myAuth.myAuthentication(myForm.value);
      if(token != null){
        localStorage.setItem('token',token.name);
        this.router.navigateByUrl('/');
        this.alert.success('Login Successful');
      }
      else{
        this.alert.error('Login Failed');
      }
    }
  }

}
