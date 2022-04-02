import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { PasswordCheckDirective } from './password-check.directive';
import { ProfileComponent } from './profile/profile.component';
import { ProductsService } from '../product/products.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordCheckDirective,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    UserService,
    ProductsService
  ]
})
export class UserModule { }
