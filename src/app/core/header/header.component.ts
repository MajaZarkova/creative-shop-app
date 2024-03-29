import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IconSetService } from '@coreui/icons-angular';
import { cilMenu, cilSearch } from '@coreui/icons';
import { SearchDataService } from '../services/search-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  icons = { cilMenu, cilSearch };
  search = '';

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get firstName(): string {
    return this.userService.user?.firstName || '';
  }

  constructor(private router: Router, 
              private userService: UserService, 
              public iconSet: IconSetService,
              private searchService: SearchDataService) {
    iconSet.icons = { cilMenu, cilSearch }
  }

  logout(): void {
    // this.userService.logout().subscribe(() => {
    //   this.router.navigate(['/']);
    // })

    this.userService.logout().then(user => {
      this.router.navigate(['/']);
    }).catch(err => {
      console.log(err);
    })
  }

  redirect(searchWord: string): void {
    this.searchService.setFilter(searchWord)
    this.router.navigate(['/products'])
  }
}
