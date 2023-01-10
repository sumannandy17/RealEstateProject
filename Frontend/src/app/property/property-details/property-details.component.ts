import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public propertyId : number;

  ngOnInit(): void {
    //The id is case sensitive, should be same with the one mentioned in app module where route is present.
    this.propertyId = this.route.snapshot.params['id'];
  }

}
