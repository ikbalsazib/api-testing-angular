import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../interfaces/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: string;
  product: Product = null;

  slides = [
    {color: '#007bff' ,text: 'Slider 1'},
    {color: '#6c757d' ,text: 'Slider 2'},
    {color: '#17a2b8' ,text: 'Slider 3'},
    {color: '#28a745' ,text: 'Slider 4'},
    {color: '#dc3545' ,text: 'Slider 5'},
    {color: '#ffc107' ,text: 'Slider 6'}
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id')
      if (this.id) {
        this.getSingleProductById();
      }
    })
  }

  /**
   * HTTP REQ HANDLE
   */

  private getSingleProductById() {
    this.productService.getSingleProductById(this.id)
      .subscribe(res => {
        this.product = res.data;
        console.log(this.product);
        console.log(res.message);
      }, error => {
        console.log(error)
      })
  }


}
