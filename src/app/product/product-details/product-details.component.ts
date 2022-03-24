import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product: IProduct | undefined;

  constructor(private productsService: ProductsService,
    private activatedRoute: ActivatedRoute) {
    this.fetchOneProduct()
  }

  fetchOneProduct(): void {
    this.product = undefined;
    const id = this.activatedRoute.snapshot.params['productId'];
    this.productsService.loadOneProduct(id).subscribe(product => this.product = product);
  }

}
