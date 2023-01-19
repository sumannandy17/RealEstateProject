import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  public propertyId : number;

  //Angular will not re-render a component if you are already on the same component, default behaviour.

  ngOnInit(): void {
    //The id is case sensitive, should be same with the one mentioned in app module where route is present. Snapshot is used for intial loading.
    this.propertyId = +this.route.snapshot.params['id'];
    //this.propertyId = Number(this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    );
  }

  nextPage(){
    this.propertyId += 1;
    //this.router.navigate(['property-details/' + this.propertyId]);
    this.router.navigate(['property-details' , this.propertyId]);
  }

}
