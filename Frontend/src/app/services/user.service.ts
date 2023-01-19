import {Injectable} from '@angular/core';

@Injectable({
  providedIn : 'root'
})

export class UserService{

  addingUsers(user){
    let users = [];
    if(localStorage.getItem('user')){
      users = JSON.parse(localStorage.getItem('user'));
      //... is the spread operator. helps in expanding the elements of array.
      users = [user, ...Object.values(users)];
    }
    else{
      users = [user]
    }
    localStorage.setItem('user',JSON.stringify(users));
  }

}
