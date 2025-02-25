import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [NgIf, NgClass, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  
  @Input() 
  product : Product = {
    id: 0,
    name: "",
    price: 0,
    inStock: false,
    onSale: false,
    image: ""
  }

  selectedProduct: any = null;

  selectProduct(product: Product) {
    if (this.selectedProduct === product) {
      this.selectedProduct = null;
    } else {
      this.selectedProduct = product;
    }
  }
}
