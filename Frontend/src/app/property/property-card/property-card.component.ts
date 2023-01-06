import { Component } from '@angular/core';

@Component({
  selector : 'app-property-card',
  templateUrl : 'property-card.component.html',
  styleUrls : ['property-card.component.css']

})
export class PropertyCardComponent{
  MyCardProperty : any = {
    "Id" : 1,
    "Name" : "RajBhawan",
    "Type" : "House",
    "Price" : 24000
  }
}
