import { Injectable } from '@angular/core';
import { Property } from 'src/app/model/property';
import { EstateService } from 'src/app/services/estate.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/Operators';


@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property>{

constructor(private estate : EstateService, private router : Router) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Property>|Property {
    const propId = route.params['id'];
    // + plus is used to convert the data returned to number. It is very important
    return this.estate.fetchbyIDforEdit(+propId).pipe(
      catchError(error => {
        this.router.navigate(['/']);
        return of(null);
      })
    );
}

}
