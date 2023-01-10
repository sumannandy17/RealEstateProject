import { Component, Input } from '@angular/core';
import { IPropertyinterface } from '../property.interface';

@Component({
  selector : 'app-property-card',
  templateUrl : 'property-card.component.html',
  styleUrls : ['property-card.component.css']

})
export class PropertyCardComponent{

  @Input() acceptingProperty : IPropertyinterface;


}
