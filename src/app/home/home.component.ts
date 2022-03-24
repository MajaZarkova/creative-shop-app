import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../product/products.service';
import { IProduct } from '../shared/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  recentProducts: IProduct[] | undefined;

  constructor(private router: Router, private productsService: ProductsService) { 
    this.fetchRecentProducts()
  }

  fetchRecentProducts(): void {
    this.recentProducts = undefined;
    this.productsService.loadRecentProducts(5).subscribe(products => this.recentProducts = products);
  }

}
