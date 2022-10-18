import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { ICategory } from 'src/app/shared/interfaces/category';
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
  categories: ICategory[] | undefined;

  constructor(private router: Router, 
              private productsService: ProductsService, 
              private categoriesService: CategoriesService,
              private route: ActivatedRoute,
              public searchService: SearchDataService) {
    this.fetchProducts();
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categoriesService.loadCategories().subscribe(categories => this.categories = categories);
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
