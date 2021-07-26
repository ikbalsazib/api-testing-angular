import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  /**
   * HTTP REQ HANDLE
   */

  private getAllProducts() {
    this.productService.getAllProducts()
      .subscribe(res => {
        this.products = res.data;
        console.log(this.products);
        console.log(res.count);
      }, error => {
        console.log(error)
      })
  }

}
