
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GlobalConfigComponent } from './components/global-config/global-config.component';
import { ModuleComponent } from './components/module/module.component';
import { UserComponent } from './components/user/user.component';
import { UserGroupComponent } from './components/user-group/user-group.component';
import { ModuleListComponent } from './components/module/module-list/module-list.component';
import { ModuleFormComponent } from './components/module/module-form/module-form.component';

import { EntityTypeComponent } from './components/entity-type/entity-type.component';
import { EntityTypeFormComponent } from './components/entity-type/entity-type-form/entity-type-form.component';
import { EntityTypeListComponent } from './components/entity-type/entity-type-list/entity-type-list.component';


import { EntityTypeFieldComponent } from './components/entity-type-field/entity-type-field.component';
import { EntityTypeFieldFormComponent } from './components/entity-type-field/entity-type-field-form/entity-type-field-form.component';
import { EntityTypeFieldListComponent } from './components/entity-type-field/entity-type-field-list/entity-type-field-list.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'config', component: GlobalConfigComponent, data: { title: 'Config' } },
  {
    path: 'modules',
    data: { title: 'Modules' },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list'},
      { path: 'list', component: ModuleListComponent, data: { title: 'List' } },
      { path: 'new', component: ModuleFormComponent, data: { title: 'New' } },
      { path: 'edit/:id', component: ModuleFormComponent, data: { title: 'Edit' } },
      { path: 'delete/:id', component: ModuleFormComponent, data: { title: 'Delete' } },
      { path: 'details/:id', component: ModuleFormComponent, data: { title: 'Details' } }
    ]
  },
  {
    path: 'entitytype',
    data: { title: 'EntityType' },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list'},
      { path: 'list', component: EntityTypeListComponent, data: { title: 'List' } },
      { path: 'new', component: EntityTypeFormComponent, data: { title: 'New' } },
      { path: 'edit/:id', component: EntityTypeFormComponent, data: { title: 'Edit' } },
      { path: 'delete/:id', component: EntityTypeFormComponent, data: { title: 'Delete' } },
      { path: 'details/:id', component: EntityTypeFormComponent, data: { title: 'Details' } }
    ]
  },
  {
    path: 'entitytypefield',
    data: { title: 'Field' },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list'},
      { path: 'list', component: EntityTypeFieldListComponent, data: { title: 'List' } },
      { path: 'new', component: EntityTypeFieldFormComponent, data: { title: 'New' } },
      { path: 'edit/:id', component: EntityTypeFieldFormComponent, data: { title: 'Edit' } },
      { path: 'delete/:id', component: EntityTypeFieldFormComponent, data: { title: 'Delete' } },
      { path: 'details/:id', component: EntityTypeFieldFormComponent, data: { title: 'Details' } }
    ]
  },
  { path: 'users', component: UserComponent, data: { title: 'Users' } },
  { path: 'groups', component: UserGroupComponent, data: { title: 'Groups' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
