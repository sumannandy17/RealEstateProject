import { Component, Input } from '@angular/core';
import { IPropertyinterface } from '../../model/property.interface';

@Component({
  selector : 'app-property-card',
  templateUrl : 'property-card.component.html',
  styleUrls : ['property-card.component.css']

})
export class PropertyCardComponent{

  @Input() acceptingProperty : IPropertyinterface;
  @Input() acceptingButtonFlag : boolean;


}
