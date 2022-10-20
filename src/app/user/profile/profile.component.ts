import { Component } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  get user() {
    return this.userService.user;
  } 

  isLoading = false;

  productsListed: IProduct[] | undefined = undefined;

  constructor(private userService: UserService, private productsService: ProductsService) {
    // this.userService.getUserProfile().subscribe(() => {
    //   this.isLoading = false;
    // })
    this.fetchUserProducts();
  }

  fetchUserProducts(): void {
    this.productsService.loadUserProducts().subscribe(products => this.productsListed = products);
  }

}
