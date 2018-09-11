import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './product';

@Pipe({
  name: 'productFilter',
  pure: false
})
export class ProductFilterPipe implements PipeTransform {
  private counter = 0;
  transform(products: Product[], filterText?: string): Product[] {
    this.counter++;
    if (!products || !filterText) {
      return products;
    }
    return products.filter(product => product.productName.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1);
  }
}
