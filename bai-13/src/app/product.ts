import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsImage = [
  { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "h1.png" },
  { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "h2.png" },
  { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "h3.png" }
];

  constructor() { }

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: any) {
    return this.productsImage.find(x => x.ProductId == id);
  }
}