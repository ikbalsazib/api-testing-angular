import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Product} from '../interfaces/product';

const API_PRODUCT = environment.apiBaseLink + '/api/v1/product/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }


  addNewProduct(data: any) {
    return this.httpClient.post<{response: any, message: string}>(API_PRODUCT + 'add-single-product', data)
  }

  getAllProducts() {
    return this.httpClient.get<{data: Product[], count: number}>(API_PRODUCT + 'get-all-products')
  }

  getSingleProductById(id: string) {
    return this.httpClient.get<{data: Product, message: string}>(API_PRODUCT + 'get-single-product-by-id/' + id)
  }


}
