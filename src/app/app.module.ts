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
import { ProductsService } from './core/services/products.service';
import { UserService } from './core/services/user.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ProductModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
