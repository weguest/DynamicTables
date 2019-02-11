import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedDataService } from './services/shared.data.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarFooterComponent } from './components/navbar-footer/navbar-footer.component';
import { MasterPageComponent } from './components/master-page/master-page.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    FilterPipe,
    NavbarComponent,
    SidebarComponent,
    NavbarFooterComponent,
    MasterPageComponent,
    BreadcrumbComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    NavbarFooterComponent,
    MasterPageComponent,
    BreadcrumbComponent,
    NotFoundPageComponent,
    AgGridModule,
    FilterPipe
  ],
  providers: [SharedDataService]
})
export class SharedModule {}
