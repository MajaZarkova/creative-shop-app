import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(form: NgForm) {
    this.productsService.createProduct(form.value).subscribe({
      next: (product) => {
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
