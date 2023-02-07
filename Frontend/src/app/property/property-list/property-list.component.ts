import { Component, OnInit } from '@angular/core';
import {EstateService} from 'src/app/services/estate.service';
import {IPropertyBaseInterface} from 'src/app/model/propertyBase.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private myEstate: EstateService, private route : ActivatedRoute) { }

  rentSell = 1;

  buttonDisplayFlag : boolean = true;

  ngOnInit(): void {
    //here we are manupulating the data and retreiving it based on the flag and then populating this component.
    //Defaut behaviour would be, it will load and show the buy fields data, but if someone clicks on Rent menu,
    //it will show the rent data.

    //NOTES
    //While merging two array : myEstate and filteredArray are of type IPropertyBaseInterface[]
    //this.MyCardProperty = [myEstate, ...filteredArray]; ---- This will throw error
    //this.MyCardProperty = [...myEstate, ...filteredArray]; ---- this will work fine
    //Because this means that myEstate is of type IPropertyBaseInterface(which is a single object) and not IPropertyBaseInterface[]
    //which is an array of objects. So using spread operator we cannot merge an object with an array(of objects).

    if(this.route.snapshot.url.toString()){
      this.rentSell = 2;
    }

    this.myEstate.dataEstate(this.rentSell).subscribe(
      myEstate =>{
        if(localStorage.getItem('property')){
          const filteredArray :  Array<IPropertyBaseInterface> = [];
          const fromWebBrowserLStorage = JSON.parse(localStorage.getItem('property'));
            for(let id in fromWebBrowserLStorage){
              if(fromWebBrowserLStorage.hasOwnProperty(id) && fromWebBrowserLStorage[id].SellRent ===  this.rentSell){
                filteredArray.push(fromWebBrowserLStorage[id]);
              }
            }
            this.MyCardProperty = [...myEstate, ...filteredArray];
        }
        else{
          this.MyCardProperty = myEstate
        }
        console.log(this.route.snapshot.url.toString())
      },
      error =>{
        console.log(error)
      }
    );
  }
  MyCardProperty : Array<IPropertyBaseInterface>;
}
