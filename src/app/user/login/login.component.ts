import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(userForm: NgForm): void {
    this.userService.login(userForm.value).subscribe({
      next: (user) => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}
