import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/product/products.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = this.userService.user;
  productsListed: IProduct[] | undefined = undefined;

  constructor(private userService: UserService, private productsService: ProductsService) {
    this.fetchUserProducts();
    console.log(this.productsListed);
  }

  ngOnInit(): void {
  }

  fetchUserProducts(): void {
    const userId = this.user!._id;
    this.productsService.loadUserProducts(userId).subscribe(products => this.productsListed = products);
  }

}
