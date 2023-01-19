import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  onClickBack(){
    this.route.navigate(['/']);
  }

  myFormSubmit(form: NgForm){
    console.log(form);
  }
}
