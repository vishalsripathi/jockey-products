import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Products } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  public productsList(): Observable<any> {
    return this.httpClient.get<any[]>('assets/sampleData.json').pipe(
      map((data) => {
        const products: Products[] = [];
        data.forEach((element, i) => {
          products.push({
            image: element.ListImagePath + element.Images.split('|')[0],
            collection: element.Collection,
            price: element.Price,
            productTitle: element.ProductTitle,
            styleName: element.StyleName,
            styleNumber: element.StyleNumber,
            netQuantity: element.NetQuantity,
            productCode: element.ProductCode,
            availableSizes: element.AvailableSizes,
          });
        });
        return products;
      })
    );
  }
}
