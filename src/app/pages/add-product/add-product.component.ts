import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

// Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm: FormGroup;

  brands: any[] = [
    {name: 'Brand 1', slug: 'brand-1'},
    {name: 'Brand 2', slug: 'brand-2'},
    {name: 'Brand 2', slug: 'brand-3'},
  ];

  categories: any[] = [
    {name: 'category 1', slug: 'category-1'},
    {name: 'category 2', slug: 'category-2'},
    {name: 'category 2', slug: 'category-3'},
  ]

  subCategories: any[] = [
    {name: 'subCategory 1', slug: 'subCategory-1'},
    {name: 'subCategory 2', slug: 'subCategory-2'},
    {name: 'subCategory 2', slug: 'subCategory-3'},
  ];


  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      productName: [null, Validators.required],
      productSlug: [null, Validators.required],
      sku: [null, Validators.required],
      price: [null, Validators.required],
      discountType: [null],
      discountAmount: [null],
      quantity: [null, Validators.required],
      soldQuantity: [null],
      brand: [null, Validators.required],
      category: [null, Validators.required],
      subCategory: [null, Validators.required],
      shortDescription: [null],
      description: [null],
      rating: [null],
    })

  }


  onSubmit() {
    if (this.dataForm.invalid) {
      console.log('Form is Invalid')
      return;
    }

    this.addSingleProduct(this.dataForm.value);

  }


  /**
   * HTTP REQ HANDLE
   */
  private addSingleProduct(data: any) {
    this.productService.addNewProduct(data)
      .subscribe(res => {
        console.log(res.message);
        console.log(res.response);
      }, error => {
        console.log(error)
      })
  }


  ngOnDestroy() {

  }

}
