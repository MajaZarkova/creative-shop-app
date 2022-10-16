import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { errorInterceptor } from './error-handler';
import { SearchDataService } from './services/search-data.service'

import { NavModule, HeaderModule, GridModule, DropdownModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavModule,
    HeaderModule,
    GridModule,
    DropdownModule,
    IconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    errorInterceptor,
    IconSetService,
    SearchDataService
  ]
})
export class CoreModule { }
