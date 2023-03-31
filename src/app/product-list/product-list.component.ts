import { UserService } from './../services/user.service';
import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductService, UserService]
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  userName: string = '';

  constructor(private productService: ProductService, private userService: UserService) { }

  ngOnInit(): void {
    //const productService = new ProductService();
    this.products = this.productService.getProducts();
    this.userName = this.userService.getCurrentUser();

    this.productService.searchedProductEmitter.subscribe((data) => {
      if (data.length != 0) {
        this.products = data;
      }
    })

  }
}
