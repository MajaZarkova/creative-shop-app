import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { AboutComponent } from './about/about.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './product/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    ProductModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
