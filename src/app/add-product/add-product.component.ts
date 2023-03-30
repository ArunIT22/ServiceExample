import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  //providers: [ProductService]
})
export class AddProductComponent implements OnInit {

  name: string = '';
  price!: number;
  color: string = '';
  inStock!: boolean;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addNewProduct() {
    let prd = new Product();
    prd.name = this.name;
    prd.color = this.color;
    prd.inStock = this.inStock;
    prd.price = this.price;
    this.productService.addProduct(prd);
    console.log(prd);
  }
}
