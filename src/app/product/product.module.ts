import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsService } from './products.service';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [
    ProductRoutingModule,
    ProductsService
  ]
})
export class ProductModule { }
