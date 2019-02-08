import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { MasterPageComponent } from './shared/master-page/master-page.component';
import { AdminModule } from './admin/admin.module';


const routes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
  exports: []
})
export class AppModule { }
