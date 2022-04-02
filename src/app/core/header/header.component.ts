import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get firstName(): string {
    return this.userService.user?.firstName || '';
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logout().subscribe({
      next: () => {
        this.userService.user = null;
        this.router.navigate(['/home']);
      }
    })
  }
}
