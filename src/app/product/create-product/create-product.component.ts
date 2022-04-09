import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  constructor(private productsService: ProductsService, private router: Router) { }

  createProduct(form: NgForm) {
    form.value.category = this.transformCategoryValue(form.value.category);
    this.productsService.createProduct(form.value).subscribe({
      next: (product) => {
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  private transformCategoryValue(value: string): string {
    if (value == 'Woman') {
      value = 'Women'
    } else if (value == 'Man') {
      value = 'Men'
    }

    return value;
  }

}
