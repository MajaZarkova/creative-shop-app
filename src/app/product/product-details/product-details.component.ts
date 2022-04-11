import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { UserService } from 'src/app/core/services/user.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product: IProduct | undefined;
  private id = this.activatedRoute.snapshot.params['productId'];
  get isOwner(): boolean {
    return this.userService.user?._id == this.product?.seller._id;
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.fetchOneProduct();
  }

  fetchOneProduct(): void {
    this.product = undefined;
    this.productsService.loadOneProduct(this.id).subscribe(product => this.product = product);
  }

  removeProduct(id: string): void {
    if (!this.isOwner) {
      this.router.navigate([`/error`], { queryParams: { error: 'Only owner can remove a product' } });
      return;
    }

    this.productsService.removeProduct(id).subscribe({
      next: (product) => {
        this.router.navigate(['/remove-confirmation']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  orderProduct(form: NgForm): void {
    if (!this.isLogged) {
      this.router.navigate([`/login`]);
      return;
    }

    if (this.isOwner) {
      this.router.navigate([`/error`], {queryParams: {error: 'Owner cannot order their own products!'}});
      return;
    }

    if (form.invalid) { return; }

    this.productsService.orderProduct(this.id, form.value).subscribe({
      next: (product) => {
        this.router.navigate(['/order-confirmation']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
