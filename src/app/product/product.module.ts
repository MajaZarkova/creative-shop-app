import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsService } from '../core/services/products.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserService } from '../core/services/user.service';
import { SearchDataService } from '../core/services/search-data.service'
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { RemoveConfirmationComponent } from './remove-confirmation/remove-confirmation.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    CreateProductComponent,
    EditProductComponent,
    OrderConfirmationComponent,
    RemoveConfirmationComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    ProductRoutingModule,
    ProductsService,
    UserService,
    SearchDataService
  ]
})
export class ProductModule { }
