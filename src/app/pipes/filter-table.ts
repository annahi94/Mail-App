import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterTable',
    pure: false
})

export class FilterTablePipe implements PipeTransform {    
    transform(items: any[], term: string) : any[]{
        if (items.length === 0 || term === '') {
            return items;
        }

        const resultArray = [];
        for (const item of items) {
            if(item.title == term)
                resultArray.push(item);
        }

        return resultArray;
    }
}