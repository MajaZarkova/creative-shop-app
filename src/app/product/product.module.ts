import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsService } from './products.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  providers: [
    ProductRoutingModule,
    ProductsService
  ]
})
export class ProductModule { }
