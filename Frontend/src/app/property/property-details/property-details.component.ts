import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstateService } from 'src/app/services/estate.service';
import { Property } from 'src/app/model/property';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private estate : EstateService) { }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  public propertyId : number;
  public property = new Property();
  //public editProperty : Property;

  //Angular will not re-render a component if you are already on the same component, default behaviour.

  ngOnInit(): void {
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

    //Photo Gallery Section
    this.galleryOptions = [
      {
          width: '100%',
          height: '500px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = [
    {
        small: 'assets/images/interior_1.jpg',
        medium: 'assets/images/interior_1.jpg',
        big: 'assets/images/interior_1.jpg'
    },
    {
        small: 'assets/images/interior_2.jpg',
        medium: 'assets/images/interior_2.jpg',
        big: 'assets/images/interior_2.jpg'
    },
    {
        small: 'assets/images/interior_3.jpg',
        medium: 'assets/images/interior_3.jpg',
        big: 'assets/images/interior_3.jpg'
    },
    {
        small: 'assets/images/interior_4.jpg',
        medium: 'assets/images/interior_4.jpg',
        big: 'assets/images/interior_4.jpg'
    },
    {
        small: 'assets/images/interior_5.jpg',
        medium: 'assets/images/interior_5.jpg',
        big: 'assets/images/interior_5.jpg'
    }
];

  }

  nextPage(){
    this.propertyId += 1;
    //this.router.navigate(['property-details/' + this.propertyId]);
    this.router.navigate(['property-details' , this.propertyId]);
  }

}
