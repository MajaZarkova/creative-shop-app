import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import { IProduct } from '../shared/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  recentProducts: IProduct[] | undefined;
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

  categories = [
    {name: "Men’s Clothing"},
    {name: "Women’s Clothing"},
    {name: "Phones and accessories"},
    {name: "Jewelry and Watches"},
    {name: "Computer and Office"},
    {name: "Bags and Shoes"},
    {name: "Health, Beauty and Hair"},
    {name: "Sports and Outdoors"},
    {name: "Home, Garden and Furniture"},
    {name: "Home Improvement"},
    {name: "Automobiles and Motorcycles"},
    {name: "Toys, Kids and Babies"},
    {name: "Consumer Electronics"},
    ];

  constructor(private router: Router, private productsService: ProductsService) { 
    this.fetchRecentProducts()
  }

  fetchRecentProducts(): void {
    this.recentProducts = undefined;
    this.productsService.loadRecentProducts(5).subscribe(products => this.recentProducts = products);
  }

}
