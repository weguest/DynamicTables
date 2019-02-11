import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GlobalConfigComponent } from './components/global-config/global-config.component';
import { ModuleComponent } from './components/module/module.component';
import { EntitytypeComponent } from './components/entitytype/entitytype.component';
import { EntitytypefieldComponent } from './components/entitytypefield/entitytypefield.component';
import { UserComponent } from './components/user/user.component';
import { UserGroupComponent } from './components/user-group/user-group.component';
import { ModuleListComponent } from './components/module/module-list/module-list.component';
import { ModuleFormComponent } from './components/module/module-form/module-form.component';
import { EntitytypefieldListComponent } from './components/entitytypefield/entitytypefield-list/entitytypefield-list.component';
import { EntitytypefieldFormComponent } from './components/entitytypefield/entitytypefield-form/entitytypefield-form.component';
import { EntitytypeListComponent } from './components/entitytype/entitytype-list/entitytype-list.component';
import { EntitytypeFormComponent } from './components/entitytype/entitytype-form/entitytype-form.component';


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
      { path: 'list', component: EntitytypeListComponent, data: { title: 'List' } },
      { path: 'new', component: EntitytypeFormComponent, data: { title: 'New' } },
      { path: 'edit/:id', component: EntitytypeFormComponent, data: { title: 'Edit' } },
      { path: 'delete/:id', component: EntitytypeFormComponent, data: { title: 'Delete' } },
      { path: 'details/:id', component: EntitytypeFormComponent, data: { title: 'Details' } }
    ]
  },
  {
    path: 'entitytypefield',
    data: { title: 'Field' },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list'},
      { path: 'list', component: EntitytypefieldListComponent, data: { title: 'List' } },
      { path: 'new', component: EntitytypefieldFormComponent, data: { title: 'New' } },
      { path: 'edit/:id', component: EntitytypefieldFormComponent, data: { title: 'Edit' } },
      { path: 'delete/:id', component: EntitytypefieldFormComponent, data: { title: 'Delete' } },
      { path: 'details/:id', component: EntitytypefieldFormComponent, data: { title: 'Details' } }
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
