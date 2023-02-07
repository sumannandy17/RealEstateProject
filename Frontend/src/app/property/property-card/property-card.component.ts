import { Component, Input } from '@angular/core';
import { IPropertyBaseInterface } from '../../model/propertyBase.interface';

@Component({
  selector : 'app-property-card',
  templateUrl : 'property-card.component.html',
  styleUrls : ['property-card.component.css']

})
export class PropertyCardComponent{

  @Input() acceptingProperty : IPropertyBaseInterface;
  @Input() acceptingButtonFlag : boolean;


}
