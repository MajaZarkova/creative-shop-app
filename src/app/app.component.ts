import { Component } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'creative-shop-app';

  constructor(private userService: UserService) {
    this.userService.getUserProfile().subscribe({
      error: (error) => {
        this.userService.user = null;
        throw error;
      }
    });
  }
}
