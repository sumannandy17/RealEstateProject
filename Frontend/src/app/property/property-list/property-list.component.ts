import { Component, OnInit } from '@angular/core';
import {EstateService} from 'src/app/services/estate.service';
import {IPropertyinterface} from 'src/app/property/property.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private myEstate: EstateService, private route : ActivatedRoute) { }

  rentSell = 1;

  ngOnInit(): void {
    //here we are manupulating the data and retreiving it based on the flag and then populating this component.
    //Defaut behaviour would be, it will load and show the buy fields data, but if someone clicks on Rent menu,
    //it will show the rent data.
    if(this.route.snapshot.url.toString()){
      this.rentSell = 2;
    }

    this.myEstate.dataEstate(this.rentSell).subscribe(
      myEstate =>{
        this.MyCardProperty = myEstate
        console.log(this.route.snapshot.url.toString())
      },
      error =>{
        console.log(error)
      }
    );
  }
  MyCardProperty : Array<IPropertyinterface>;
}
