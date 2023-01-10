import { Component, OnInit } from '@angular/core';
import {EstateService} from 'src/app/services/estate.service';
import {IPropertyinterface} from 'src/app/property/property.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private myEstate: EstateService) { }

  ngOnInit(): void {
    this.myEstate.dataEstate().subscribe(
      myEstate =>{
        this.MyCardProperty = myEstate
      },
      error =>{
        console.log(error)
      }
    );
  }
  MyCardProperty : Array<IPropertyinterface>;
}
