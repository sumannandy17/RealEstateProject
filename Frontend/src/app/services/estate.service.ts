import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { map } from 'rxjs/Operators';
import { IPropertyinterface } from '../model/property.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private myHttp:HttpClient) { }

  dataEstate(rentSell : number): Observable<IPropertyinterface[]>{
    return this.myHttp.get("data/sampledata.json").pipe(
      map(data => {
        const myProperties : Array<IPropertyinterface> = []
        for(let id in data){
          if(data.hasOwnProperty(id) && data[id].BuySell === rentSell){
          myProperties.push(data[id])
          }
        }
        return myProperties;
      })
    );
  }
}
