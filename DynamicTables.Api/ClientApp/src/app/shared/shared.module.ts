import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedDataService } from './shared.data.service';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarFooterComponent } from './navbar-footer/navbar-footer.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    NavbarFooterComponent,
    MasterPageComponent,
    BreadcrumbComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    NavbarFooterComponent,
    MasterPageComponent,
    BreadcrumbComponent,
    NotFoundPageComponent
  ],
  providers: [SharedDataService]
})
export class SharedModule {}
