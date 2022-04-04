import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'creative-shop-app';

  constructor(private userService: UserService) {
    this.userService.getUserProfile().subscribe({
      error: () => {
        this.userService.user = null;
      }
    });
  }
}
