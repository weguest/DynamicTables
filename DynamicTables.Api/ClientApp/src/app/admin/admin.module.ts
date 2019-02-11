import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AceEditorModule } from 'ng2-ace-editor';

import { ModuleComponent } from './components/module/module.component';
import { EntitytypeComponent } from './components/entitytype/entitytype.component';
import { EntitytypefieldComponent } from './components/entitytypefield/entitytypefield.component';
import { GlobalConfigComponent } from './components/global-config/global-config.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserGroupComponent } from './components/user-group/user-group.component';
import { ModuleListComponent } from './components/module/module-list/module-list.component';
import { ModuleFormComponent } from './components/module/module-form/module-form.component';
import { ModuleService } from './services/module.service';

import { EntitytypefieldFormComponent } from './components/entitytypefield/entitytypefield-form/entitytypefield-form.component';
import { EntitytypefieldListComponent } from './components/entitytypefield/entitytypefield-list/entitytypefield-list.component';
import { EntityTypeFieldService } from './services/entity-type-field.service';
import { EntitytypeListComponent } from './components/entitytype/entitytype-list/entitytype-list.component';
import { EntitytypeFormComponent } from './components/entitytype/entitytype-form/entitytype-form.component';
import { SharedModule } from '../shared/shared.module';
import { EntityTypeService } from './services/entity-type.service';


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
    EntitytypefieldFormComponent,
    EntitytypefieldListComponent,
    EntitytypeListComponent,
    EntitytypeFormComponent
  ],
  imports: [CommonModule,  AdminRoutingModule, HttpClientModule, FormsModule, AceEditorModule, SharedModule],
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
    EntityTypeService,
    EntityTypeFieldService
  ]
})
export class AdminModule {}
