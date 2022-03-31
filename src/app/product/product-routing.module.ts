import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
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
    component: CreateProductComponent
  },
  {
    path: 'edit/:productId',
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }