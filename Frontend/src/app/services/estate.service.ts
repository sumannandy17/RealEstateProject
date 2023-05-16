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

  fetchbyIDforEdit(id : number){
    return this.dataEstate().pipe(
      map(
        data => {
           //throw new Error('Not working');
          return data.find(p => p.Id === id)
        }
      )
    )
  }

  dataEstate(rentSell? : number): Observable<Property[]>{
    return this.myHttp.get("data/sampledata.json").pipe(
      map(data => {
        const myProperties : Array<Property> = []
        const fromWebLStorage = JSON.parse(localStorage.getItem('property'));
        if(fromWebLStorage){
          for(let webID in fromWebLStorage){
            if(rentSell){
              if(fromWebLStorage.hasOwnProperty(webID) && fromWebLStorage[webID].SellRent === rentSell){
                myProperties.push(fromWebLStorage[webID])
              }
            }
            else{
              myProperties.push(fromWebLStorage[webID])
            }
          }
        }
        for(let id in data){
          if(rentSell){
            if(data.hasOwnProperty(id) && data[id].SellRent === rentSell){
              myProperties.push(data[id])
              }
          }
          else{
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

  propertyId(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1))
      return +localStorage.getItem('PID');
    }else{
      localStorage.setItem('PID', '101');
      return 101;
    }

  }

}
