import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], filterString : string, filterPropName : string): any[] {
     const results = [];
    if(value.length === 0 || filterString === '' || filterPropName === ''){
      return value;
    }
    for(const items of value){
      if(items[filterPropName].toLowerCase() === filterString.toLowerCase()){
        results.push(items);
      }
    }
    return results;
  }

}
