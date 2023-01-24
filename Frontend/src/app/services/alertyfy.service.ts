import {Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn : 'root'
})

export class AlertyfyService{

  success(message : string){
    return alertyfy.success(message);
  }

  error(message : string){
    return alertyfy.error(message);
  }
}
