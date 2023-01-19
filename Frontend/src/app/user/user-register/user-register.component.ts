import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private fb : FormBuilder, private user : UserService ) { }

  registrationForm : FormGroup;
  myUser : any = {};
  userSubmitted : boolean;

  ngOnInit(): void {
    //Below code is to make formControls using FormGroup. We will refactor this coe with formBuilder
    // this.registrationForm = new FormGroup({
    //   userName : new FormControl(null,[Validators.required,Validators.minLength(4)]),
    //   userEmail : new FormControl(null,[Validators.required, Validators.email]),
    //   userPassword : new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   userCPassword : new FormControl(null,Validators.required),
    //   userMobile : new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    // }, this.userPasswordMatchValidator);
    this.userRegistrationForm();
  }

  userRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName : [null,[Validators.required,Validators.minLength(4)]],
      userEmail : [null,[Validators.required, Validators.email]],
      userPassword : [null,[Validators.required,Validators.minLength(8)]],
      userCPassword : [null,Validators.required],
      userMobile : [null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    }, {validators : this.userPasswordMatchValidator})
  }

  //Reactive forms have in built validators, but when our requirement is not fullfilled we have to create custom validators
  userPasswordMatchValidator(fg: FormGroup): Validators{
    return fg.get('userPassword').value === fg.get('userCPassword').value ? null :
    {notmatched : true}
  }

  //Getter Methods: Angular provides getter methods that can be used to expose any value as property. These are special methods prefixed with get, the
  //restriction on this function is you cannot pass any argument but it must return something.

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get userEmail(){
    return this.registrationForm.get('userEmail') as FormControl;
  }
  get userPassword(){
    return this.registrationForm.get('userPassword') as FormControl;
  }
  get userCPassword(){
    return this.registrationForm.get('userCPassword') as FormControl;
  }
  get userMobile(){
    return this.registrationForm.get('userMobile') as FormControl;
  }

  onSubmit(){
      console.log(this.registrationForm);
      //We have put userSubmitted in the HTML error section. how it works?
      //Suppose a person clicks save button on a blank form, the below flag will help in raising the error message in the HTML.
      //Because previously we were only checking if both form is invalid && touched is true.
      //But since the form was not touched, so the error message will not appear.
      //hence we added this userSubmitted extra flag so that when form is invalid && flag is true, raise the error messages on
      //invalid forms.
      this.userSubmitted = true;

    if(this.registrationForm.valid){
      this.myUser = Object.assign(this.myUser,this.registrationForm.value)
      this.user.addingUsers(this.myUser);
      this.registrationForm.reset();
      this.userSubmitted = false;
    }
  }


}
