import { LogService } from './log.service';
import { Product } from './../models/product';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private logService: LogService) {

  }

  public productList: Product[] = [];

  public getProducts(): Product[] {

    this.productList = [
      { name: 'Amazfit Watch', price: 5999, color: 'Black', inStock: true },
      { name: 'Apple Watch', price: 45999, color: 'Blue', inStock: true },
      { name: 'Boat Watch', price: 2999, color: 'Black', inStock: false },
      { name: 'Dell Laptop', price: 65999, color: 'Grey', inStock: true },
      { name: 'HP Laptop', price: 89999, color: 'Black', inStock: false },
      { name: 'LG Monitor', price: 12499, color: 'Black', inStock: true },
      { name: 'Samsung Monitor', price: 14499, color: 'Black', inStock: true },
      { name: 'MacBook Air Laptop', price: 85499, color: 'Silver', inStock: true }
    ];

    return this.productList;
  }

  public getProductByName(productName: string): Product[] {
    let newProductList: Product[] = [];
    this.getProducts().forEach((prd) => {
      if (prd.name.toLocaleLowerCase().includes(productName)) {
        newProductList.push(prd);
      }
    });
    return newProductList;
  }

  //Add Product Method
  public addProduct(product: Product) {
    console.log("Product Service :", product);
    this.productList.push(product);
    this.logService.LogMessage(product.name, product.inStock ? "Available" : "Not Available", new Date());
  }

  //Using Event Emitter
  // searchedProductEmitter = new EventEmitter<Product[]>();

  // onSearchProduct(products: Product[]) {
  //   this.searchedProductEmitter.emit(products);
  // }

  //Using Subject Observable
  searchedProductEmitter = new Subject<Product[]>();

  onSearchProduct(products: Product[]) {
    this.searchedProductEmitter.next(products);
  }
}
