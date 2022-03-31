import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute, private router: Router) {
    this.fetchOneProduct()
  }

  fetchOneProduct(): void {
    this.product = undefined;
    const id = this.activatedRoute.snapshot.params['productId'];
    this.productsService.loadOneProduct(id).subscribe(product => this.product = product);
  }

  removeProduct(id: string): void {
    this.productsService.removeProduct(id).subscribe({
      next: (product) => {
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
