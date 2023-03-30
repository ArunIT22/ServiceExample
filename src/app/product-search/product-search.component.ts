import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
  //providers: [ProductService]
})
export class ProductSearchComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  searchProduct(name: HTMLInputElement) {
    //const productService = new ProductService();
    this.products = this.productService.getProductByName(name.value);
  }

}
