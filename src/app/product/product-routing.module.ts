import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProductsComponent
      },
      {
        path: ':productId',
        component: ProductDetailsComponent
      }
    ]
  },
  {
    path: 'create',
    component: CreateProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:productId',
    component: EditProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-confirmation',
    component: OrderConfirmationComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }