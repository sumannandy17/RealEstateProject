import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { map } from 'rxjs/Operators';
import { IPropertyBaseInterface } from '../model/propertyBase.interface';
import { Property } from 'src/app/model/property';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private myHttp:HttpClient) { }

  dataEstate(rentSell : number): Observable<IPropertyBaseInterface[]>{
    return this.myHttp.get("data/sampledata.json").pipe(
      map(data => {
        const myProperties : Array<IPropertyBaseInterface> = []
        for(let id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === rentSell){
          myProperties.push(data[id])
          }
        }
        return myProperties;
      })
    );
  }

  addProperty(myProperty : Property){
    localStorage.setItem('property', JSON.stringify(myProperty))
  }

  addEstateinLocalStorage(newProperties : Property){
    let existingProperties = []
    //Json.parse() --- Converts a JSON string into an object.
    //JSON.stringify() --- converts an object in JSON string.
    if(localStorage.getItem('property')){
      existingProperties = JSON.parse(localStorage.getItem('property'))
      existingProperties = [newProperties, ...Object.values(existingProperties)]
    }
    else{
      existingProperties = [newProperties]
    }
    localStorage.setItem('property', JSON.stringify(existingProperties))
  }

}
