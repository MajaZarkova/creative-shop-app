import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { UserService } from 'src/app/user/user.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  product: IProduct | undefined;
  private id = this.activatedRoute.snapshot.params['productId'];

  get user() {
    return this.userService.user;
  }

  constructor(private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.fetchOneProduct()
  }

  fetchOneProduct(): void {
    this.product = undefined;
    this.productsService.loadOneProduct(this.id).subscribe(product => this.product = product);
  }

  editProduct(form: NgForm): void {

    if (this.product?.seller._id !== this.user?._id) {
      console.log(this.product?.seller._id)
      this.router.navigate([`/products/${this.id}`])
      return;
    }

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
