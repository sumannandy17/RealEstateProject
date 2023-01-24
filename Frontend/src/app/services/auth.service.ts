import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class AuthService{

  myAuthentication(user : any){
    //debugger;
    let valArr = [];
    if(localStorage.getItem('user')){
      valArr = JSON.parse(localStorage.getItem('user'));
    }
    //Iterates through an aray of objects and finds the matching record.
    return valArr.find(x => x.name === user.uname && x.password === user.upass);
  }

}
