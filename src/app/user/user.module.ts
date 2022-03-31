import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { PasswordCheckDirective } from './password-check.directive';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordCheckDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
