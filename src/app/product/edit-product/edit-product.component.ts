import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  product: IProduct | undefined;
  private id = this.activatedRoute.snapshot.params['productId'];

  constructor(private productsService: ProductsService,
    private activatedRoute: ActivatedRoute, private router: Router) {
    this.fetchOneProduct()
  }

  fetchOneProduct(): void {
    this.product = undefined;
    this.productsService.loadOneProduct(this.id).subscribe(product => this.product = product);
  }

  editProduct(form: NgForm): void {
    this.productsService.editProduct(this.id, form.value).subscribe({
      next: (product) => {
        this.router.navigate([`/products/${this.id}`]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
