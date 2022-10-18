import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
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
import { CategoriesService } from './core/services/categories.service'
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { SharedModule } from './shared/shared.module';

import { AlertModule } from '@coreui/angular';
import { ListGroupModule, 
         CardModule, 
         CarouselModule,
         DropdownModule,
         NavModule } from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLzbri9Q9ag8GoDWR2TjAdDwvCGHPv8ns",
  authDomain: "creative-shop-1da0d.firebaseapp.com",
  projectId: "creative-shop-1da0d",
  storageBucket: "creative-shop-1da0d.appspot.com",
  messagingSenderId: "40024302885",
  appId: "1:40024302885:web:e7cf501ff1f47b498b26cc",
  measurementId: "G-3CBXE636K8"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ProductModule,
    UserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AlertModule,
    ListGroupModule,
    CardModule, 
    CarouselModule,
    NavModule,
    IconModule,
    DropdownModule
  ],
  providers: [
    ProductsService,
    UserService,
    IconSetService,
    CategoriesService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
