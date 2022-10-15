import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { errorInterceptor } from './error-handler';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
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
    IconSetService
  ]
})
export class CoreModule { }
