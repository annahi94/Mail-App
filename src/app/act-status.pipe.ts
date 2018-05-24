import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actStatusPipe'
})
export class ActStatusPipe implements PipeTransform {

  /*public transform(value, keys: string, term: string) {
    if (!term) return value;
    return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }*/

  transform(items: any, filter: any, isAnd: boolean): any {
    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
      if (isAnd) {
        return items.filter(item =>
            filterKeys.reduce((memo, keyName) =>
                (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
      } else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            console.log(keyName);
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === "";
          });
        });
      }
    } else {
      return items;
    }
  }
}
