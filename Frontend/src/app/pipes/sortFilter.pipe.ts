import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFilter'
})
export class SortFilterPipe implements PipeTransform {

  //propArray?: any[] is a way to get n number of input arguments in the form of array, and then we can extract each one.
  transform(value: any[], propArray?: any[]): any {

    //data extraction from array and mapping as required
    const prop = propArray[0];
    const direction = propArray[1];

    let multiplier = 1

    if(direction === 'desc'){
      multiplier = -1
    }

    //using help of multiplier we are changing asending to descending.
    value.sort((a:any,b:any) => {
      if(a[prop] < b[prop]){
        return -1 * multiplier;
      }
      else if(a[prop] > b[prop]){
        return 1 * multiplier;
      }
      else{
        return 0;
      }
    })

  return value;
  }
}
