import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import { CategoriesService } from '../core/services/categories.service'
import { IProduct } from '../shared/interfaces/product';
import { ICategory } from '../shared/interfaces/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  recentProducts: IProduct[] | undefined;
  categories: ICategory[] | undefined;
  slides = [
    {
      id: "-1",
      src: "../../assets/images/banner.jpg",
      title: "",
      subtitle: ""
    },
    {
      id: "-1",
      src: "../../assets/images/banner2.jpg",
      title: "",
      subtitle: ""
    },
    {
      id: "-1",
      src: "../../assets/images/banner3.jpg",
      title: "",
      subtitle: ""
    },
    {
      id: "-1",
      src: "../../assets/images/banner4.jpg",
      title: "",
      subtitle: ""
    },
  ];

  constructor(private router: Router, private productsService: ProductsService, private categoriesService: CategoriesService) { 
    this.fetchCategories()
    this.fetchRecentProducts()
  }

  fetchRecentProducts(): void {
    this.recentProducts = undefined;
    this.productsService.loadRecentProducts(5).subscribe(products => this.recentProducts = products);
  }

  fetchCategories(): void {
    this.categoriesService.loadCategories().subscribe(categories => this.categories = categories)
  }

}
