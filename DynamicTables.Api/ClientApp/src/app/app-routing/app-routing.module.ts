import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundPageComponent } from '../shared/not-found-page/not-found-page.component';

const routes: Routes = [
    { path: '', component: AppComponent , data: { title: 'Home' }},
    { path: 'admin', loadChildren: '../admin/admin.module#AdminModule', data: { title: 'Admin' } },
    { path: '**', component: NotFoundPageComponent, data: { title: 'Not found' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
