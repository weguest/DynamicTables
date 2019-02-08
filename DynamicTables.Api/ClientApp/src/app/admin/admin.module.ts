import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AceEditorModule } from 'ng2-ace-editor';

import { ModuleComponent } from './module/module.component';
import { EntitytypeComponent } from './entitytype/entitytype.component';
import { EntitytypefieldComponent } from './entitytypefield/entitytypefield.component';
import { GlobalConfigComponent } from './global-config/global-config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { ModuleListComponent } from './module/module-list/module-list.component';
import { ModuleFormComponent } from './module/module-form/module-form.component';
import { ModuleService } from './module/module.service';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { EntitytypefieldFormComponent } from './entitytypefield/entitytypefield-form/entitytypefield-form.component';
import { EntitytypefieldListComponent } from './entitytypefield/entitytypefield-list/entitytypefield-list.component';
import { EntityTypeFieldService } from './entitytypefield/EntityTypeField.service';
import { EntitytypeListComponent } from './entitytype/entitytype-list/entitytype-list.component';
import { EntitytypeFormComponent } from './entitytype/entitytype-form/entitytype-form.component';



@NgModule({
  declarations: [
    ModuleComponent,
    EntitytypeComponent,
    EntitytypefieldComponent,
    GlobalConfigComponent,
    DashboardComponent,
    UserComponent,
    UserGroupComponent,
    ModuleListComponent,
    ModuleFormComponent,
    FilterPipe,
    EntitytypefieldFormComponent,
    EntitytypefieldListComponent,
    EntitytypeListComponent,
    EntitytypeFormComponent
  ],
  imports: [CommonModule,  AdminRoutingModule, HttpClientModule, FormsModule, AceEditorModule],
  exports: [
    RouterModule,
    ModuleComponent,
    EntitytypeComponent,
    EntitytypefieldComponent,
    GlobalConfigComponent,
    DashboardComponent,
    UserComponent,
    UserGroupComponent,
    ModuleListComponent,
    ModuleFormComponent,
    EntitytypefieldListComponent,
    EntitytypeListComponent,
    EntitytypeFormComponent
  ],
  providers: [
    ModuleService,
    EntityTypeFieldService
  ]
})
export class AdminModule {}
