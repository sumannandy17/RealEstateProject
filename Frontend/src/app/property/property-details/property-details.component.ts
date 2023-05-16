import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstateService } from 'src/app/services/estate.service';
import { Property } from 'src/app/model/property';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private estate : EstateService) { }

  public propertyId : number;
  public property = new Property();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  //public editProperty : Property;

  //Angular will not re-render a component if you are already on the same component, default behaviour.

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }]

      this.galleryImages = [
        {
          small: 'assets/images/interior_1.jpeg',
          medium: 'assets/images/interior_1.jpeg',
          big: 'assets/images/interior_1.jpeg'
        },
        {
          small: 'assets/images/interior_2.jpeg',
          medium: 'assets/images/interior_2.jpeg',
          big: 'assets/images/interior_2.jpeg'
        },
        {
          small: 'assets/images/interior_3.jpeg',
          medium: 'assets/images/interior_3.jpeg',
          big: 'assets/images/interior_3.jpeg'
        },
        {
          small: 'assets/images/interior_4.jpeg',
          medium: 'assets/images/interior_4.jpeg',
          big: 'assets/images/interior_4.jpeg'
        },
        {
          small: 'assets/images/interior_5.jpeg',
          medium: 'assets/images/interior_5.jpeg',
          big: 'assets/images/interior_5.jpeg'
        },]

    //The id is case sensitive, should be same with the one mentioned in app module where route is present. Snapshot is used for intial loading.
    // + plus is used to convert the data returned to number
    this.propertyId = +this.route.snapshot.params['id'];
    //this.propertyId = Number(this.route.snapshot.params['id']);
    /*this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
        this.estate.fetchbyIDforEdit(this.propertyId).subscribe(
          (data : Property) => {
            this.property = data;
          }
        );
      }
    );*/

    //The above direct sevice call is being replaced by a resolver, so that this will help us to do data
    //mainipulations in between as well as error handling and thus preventing the route from activating

    this.route.data.subscribe(
      (data : Property) => {
        this.property = data['prp'];
      }
    )
  }

  nextPage(){
    this.propertyId += 1;
    //this.router.navigate(['property-details/' + this.propertyId]);
    this.router.navigate(['property-details' , this.propertyId]);
  }

}
