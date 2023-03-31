import { UserService } from './../services/user.service';
import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of, Subject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductService, UserService]
})
export class ProductListComponent implements OnInit, OnDestroy {

  products!: Product[];
  userName: string = '';
  subcription!: Subscription;

  constructor(private productService: ProductService, private userService: UserService) { }


  ngOnInit(): void {
    //const productService = new ProductService();
    this.products = this.productService.getProducts();
    this.userName = this.userService.getCurrentUser();

    // this.productService.searchedProductEmitter.subscribe((data) => {
    //   if (data.length != 0) {
    //     this.products = data;
    //   }
    // },
    //   (err) => console.log(err))

    this.subcription = this.productService.searchedProductEmitter.subscribe(
      (data: Product[]) => { this.products = data; },
      (err: Error) => this.errorHandler(err),
      () => {        // perform the last operation here: notification, stop loading, etc.
      }
    )
  }

  public errorHandler(error: Error) {
    console.log(error);
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  MyObs = of([1, 2, 3]).subscribe({
    next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.info('complete')
  })


}
