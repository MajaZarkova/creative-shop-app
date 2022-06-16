import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) { }

  registerUser(userForm: NgForm): void {
    if (userForm.invalid) { return; };
    const { firstName, lastName, email, passwords } = userForm.value;

    const body: { firstName: string; lastName: string; email: string; password: string; rePassword: string } = {
      firstName,
      lastName,
      email,
      password: passwords.password,
      rePassword: passwords.rePassword
    }

    // this.userService.register(body).subscribe({
    //   next: (user) => {
    //     this.router.navigate(['/home']);
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   }
    // })

    this.userService.register(body).then(user => {
      this.router.navigate(['/home']);
    }).catch(err => {
      console.error(err);
    })
  }

}
