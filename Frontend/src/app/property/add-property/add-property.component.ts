import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBaseInterface } from 'src/app/model/propertyBase.interface';
import { Property } from 'src/app/model/property';
import { EstateService } from 'src/app/services/estate.service';
import { AlertyfyService } from 'src/app/services/Alertyfy.service';

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

  //This property is actually bound to the reactive form that will track the changes in form controls.
  addPropertyReactiveForm : FormGroup;

  //Here we are creating an object of Property class, we will then map this object with the form data that the user input.
  addPropetyFields = new Property;

  //This flag is used to trigger validation messages on click of Next/Save button without inputing any values on that form.
  formControlValidityFlag : boolean;

  displayFieldIfRentFlag : boolean;

  constructor(private route : Router, private fb : FormBuilder, private estate : EstateService, private alerty : AlertyfyService ) { }

  //These are tempoary, data will come from database.
  propertyType : Array<string> = ['House','Appartment','Duplex'];
  furnishType : Array<string> = ['Fully','Semi','Unfurnished'];
  gatedCommunity : Array<string> = ['Yes','No'];
  readyToMove : Array<string> = ['Yes','No'];
  mainEntrance : Array<string> = ['North','South','West','East'];
  houseBHK : Array<number> = [1,2,3,4];

  propertyView : IPropertyBaseInterface = {
    Id: null,
    Name: '',
    Price: null,
    PType: '',
    SellRent: null,
    FType: '',
    BHK: null,
    BuiltArea: 0,
    City: '',
    RTM: 0
  }

  ngOnInit() {
    this.myReactiveForm();
  }

  rentFlag(){
    this.displayFieldIfRentFlag = true;
  }
  sellFlag(){
    this.displayFieldIfRentFlag = false;
  }
  myReactiveForm(){
    this.addPropertyReactiveForm = this.fb.group({
      BasicInfo : this.fb.group({
        houseBHK : [null,Validators.required],
        SellRent : ['1',Validators.required],
        PType : [null,Validators.required],
        FType : [null,Validators.required],
        Name : [null,Validators.required],
        City : [null,Validators.required]
      }),
      PriceInfo : this.fb.group({
        Price : [null,Validators.required],
        BuiltArea : [null,Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null]
      }),
      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),
      OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        AOP: [null],
        PossessionOn: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
      })
    })
  }

  //#region Getter Mothods

  //Getter Methods - Used to reduce the code ---  how?
  //Check in Basicinfo next button.
  //If no getter method then code : [disabled]="!addPropertyReactiveForm.controls.Basicinfo.invalid"
  //If no getter method then code :
  //If used below getter method then code : [disabled]="!myBasicInfo.invalid"
  //Also with getter methods, we can individually set error messages on validations (like mySellRent for SellRent) property
  //instead of using a geneic BasicInfo that validates all.

  //#region Basic info
  get myBasicInfo(){
    return this.addPropertyReactiveForm.get('BasicInfo') as FormGroup;
  }
    get mySellRent(){
      return this.myBasicInfo.controls.SellRent as FormControl;
    }
    get myHouseBHK(){
      return this.myBasicInfo.controls.houseBHK as FormControl;
    }
    get myPType(){
      return this.myBasicInfo.controls.PType as FormControl;
    }
    get myFType(){
      return this.myBasicInfo.controls.FType as FormControl;
    }
    get myPropertyName(){
      return this.myBasicInfo.controls.Name as FormControl;
    }
    get myCity(){
      return this.myBasicInfo.controls.City as FormControl;
    }
    //#endregion
  get myPriceInfo(){
    return this.addPropertyReactiveForm.get('PriceInfo') as FormGroup;
  }
    get myPrice(){
      return this.myPriceInfo.controls.Price as FormControl;
    }
    get myBuiltArea(){
      return this.myPriceInfo.controls.BuiltArea as FormControl;
    }
    get myCarpetArea(){
      return this.myPriceInfo.controls.CarpetArea as FormControl;
    }
    get mySecurity(){
      return this.myPriceInfo.controls.Security as FormControl;
    }
    get myMaintenance(){
      return this.myPriceInfo.controls.Maintenance as FormControl;
    }

  get myAddressInfo(){
    return this.addPropertyReactiveForm.get('AddressInfo') as FormGroup;
  }
    get myAddress(){
      return this.myAddressInfo.controls.Address as FormControl;
    }
    get myFloorNo(){
      return this.myAddressInfo.controls.FloorNo as FormControl;
    }
    get myTotalFloor(){
      return this.myAddressInfo.controls.TotalFloor as FormControl;
    }
    get myLandMark(){
      return this.myAddressInfo.controls.LandMark as FormControl;
    }

  get myOtherInfo(){
    return this.addPropertyReactiveForm.get('OtherInfo') as FormGroup;
  }
    get myRTM(){
      return this.myOtherInfo.controls.RTM as FormControl;
    }
    get myAOP(){
      return this.myOtherInfo.controls.AOP as FormControl;
    }
    get myPossessionOn(){
      return this.myOtherInfo.controls.PossessionOn as FormControl;
    }
    get myGated(){
      return this.myOtherInfo.controls.Gated as FormControl;
    }
    get myMainEntrance(){
      return this.myOtherInfo.controls.MainEntrance as FormControl;
    }
    get myDescription(){
      return this.myOtherInfo.controls.Description as FormControl;
    }

  //#endregion

  onClickBack(){
    this.route.navigate(['/']);
  }

  myFormSubmit(){
    if(this.formValidationCheck()){
      this.mapFormData();
      this.estate.addEstateinLocalStorage(this.addPropetyFields);
      //this.estate.addProperty(this.addPropetyFields);
      console.log(this.addPropertyReactiveForm);
      if(this.mySellRent.value === '2'){
        this.route.navigateByUrl('/rent-property');
      }
      else{
        this.route.navigateByUrl('/');
      }
      this.alerty.success('Successfully Saved');
    }
    else{
      console.log(this.addPropertyReactiveForm);
      this.alerty.error('failed');
    }
  }

  formValidationCheck() : boolean{
    this.formControlValidityFlag = true;
    if(this.myBasicInfo.invalid){
      this.staticTabs.tabs[0].active = true;
      return false;
    }
    if(this.myPriceInfo.invalid){
      this.staticTabs.tabs[1].active = true;
      return false;
    }
    if(this.myAddressInfo.invalid){
      this.staticTabs.tabs[2].active = true;
      return false;
    }
    if(this.myOtherInfo.invalid){
      this.staticTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }

  mapFormData(): void{
    //Could have directlt accessed the value from the main addPropertyReactiveForm proprty and bound it just like below code instead of binding the getter methods.
    //this.addPropetyFields.Price = this.addPropertyReactiveForm.controls.Price.value;
    this.addPropetyFields.Id = this.estate.propertyId();
    this.addPropetyFields.SellRent = +this.mySellRent.value;
    this.addPropetyFields.BHK = this.myHouseBHK.value;
    this.addPropetyFields.PType = this.myPType.value;
    this.addPropetyFields.Name = this.myPropertyName.value;
    this.addPropetyFields.City = this.myCity.value;
    this.addPropetyFields.FType = this.myFType.value;
    this.addPropetyFields.Price = this.myPrice.value;
    this.addPropetyFields.Security = this.mySecurity.value;
    this.addPropetyFields.Maintenance = this.myMaintenance.value;
    this.addPropetyFields.BuiltArea = this.myBuiltArea.value;
    this.addPropetyFields.CarpetArea = this.myCarpetArea.value;
    this.addPropetyFields.FloorNo = this.myFloorNo.value;
    this.addPropetyFields.TotalFloor = this.myTotalFloor.value;
    this.addPropetyFields.Address = this.myAddress.value;
    this.addPropetyFields.Address2 = this.myLandMark.value;
    this.addPropetyFields.RTM = this.myRTM.value;
    this.addPropetyFields.AOP = this.myAOP.value;
    this.addPropetyFields.Gated = this.myGated.value;
    this.addPropetyFields.MainEntrance = this.myMainEntrance.value;
    this.addPropetyFields.Possession = this.myPossessionOn.value;
    this.addPropetyFields.Description = this.myDescription.value;
    this.addPropetyFields.PostedOn = new Date().toString();
  }

  //Indexing starts from 0
  prevTab(tabId : number){
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
  nextTab(tabId : number, isFormValid: Boolean){
    this.formControlValidityFlag = true;
    if (isFormValid) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
}
