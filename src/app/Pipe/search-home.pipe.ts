import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHome'
})
export class SearchHomePipe implements PipeTransform {

  transform(products:any[] , term:string): any[] {
    return products.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()));
  }

}
