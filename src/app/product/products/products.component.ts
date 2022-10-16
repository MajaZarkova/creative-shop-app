import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: IProduct[] | undefined;
  allProducts: IProduct[] | undefined;

  constructor(private router: Router, 
              private productsService: ProductsService, 
              private route: ActivatedRoute,
              public searchService: SearchDataService) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.products = undefined;
    this.productsService.loadProducts().subscribe(products => {
      this.products = products;
      this.allProducts = products;
    });
  }

  filterProducts(value: string | '' | null): void {
    if (value == '' || null) {
      this.products = this.allProducts;
    } else {
      this.products = this.allProducts?.filter(x => x.category == value);
    }
  }

}
