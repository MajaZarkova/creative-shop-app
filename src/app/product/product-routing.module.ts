import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }