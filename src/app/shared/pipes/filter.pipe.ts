import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchValue: string): any {
    if (!searchValue) { return value };

    return value.filter((v: IProduct) => v.productName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
      v.category.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
  }

}
