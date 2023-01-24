import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyinterface } from 'src/app/model/property.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  //ViewChild is used to access DOM elements from the template into the component class. We have myStaticTabs as template variable.
  //we created staticTabs a new poperty of type TabsetComponent.
  //We nee to tell the above property which dom element it has to reference asn for that we use the ViewChild() decorator.
  //We are telling the property staticTabs to reference myStaticTabs using the ViewChild().
  @ViewChild('myStaticTabs') staticTabs?: TabsetComponent;

  constructor(private route : Router) { }

  //These are tempoary, data will come from database.
  propertyType : Array<string> = ['House','Appartment','Duplex'];
  furnishType : Array<string> = ['Fully','Semi','Unfurnish'];
  gatedCommunity : Array<string> = ['Yes','No'];
  readyToMove : Array<string> = ['Yes','No'];
  mainEntrance : Array<string> = ['North','South','West','East'];
  houseBHK : Array<number> = [1,2,3,4];

  propertyView : IPropertyinterface = {
    Id : null,
    Name : '',
    Price : null,
    Type : '',
    BuySell : null
  }

  ngOnInit() {
  }

  onClickBack(){
    this.route.navigate(['/']);
  }

  myFormSubmit(form: NgForm){
    console.log(form);
  }

  //Indexing starts from 0
  prevTab(tabId : number){

  }
  nextTab(tabId : number){
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
}
