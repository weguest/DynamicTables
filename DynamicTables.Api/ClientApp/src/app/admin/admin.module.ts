import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AceEditorModule } from 'ng2-ace-editor';

import { ModuleComponent } from './components/module/module.component';
import { GlobalConfigComponent } from './components/global-config/global-config.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserGroupComponent } from './components/user-group/user-group.component';
import { ModuleListComponent } from './components/module/module-list/module-list.component';
import { ModuleFormComponent } from './components/module/module-form/module-form.component';
import { ModuleService } from './services/module.service';


import { EntityTypeFieldService } from './services/entity-type-field.service';
import { SharedModule } from '../shared/shared.module';

import { EntityTypeService } from './services/entity-type.service';
import { EntityTypeFormComponent } from './components/entity-type/entity-type-form/entity-type-form.component';
import { EntityTypeListComponent } from './components/entity-type/entity-type-list/entity-type-list.component';
import { EntityTypeComponent } from './components/entity-type/entity-type.component';
import { EntityTypeFieldComponent } from './components/entity-type-field/entity-type-field.component';
import { EntityTypeFieldFormComponent } from './components/entity-type-field/entity-type-field-form/entity-type-field-form.component';
import { EntityTypeFieldListComponent } from './components/entity-type-field/entity-type-field-list/entity-type-field-list.component';

@NgModule({
  declarations: [
    ModuleComponent,
    EntityTypeComponent,
    EntityTypeFieldComponent,
    GlobalConfigComponent,
    DashboardComponent,
    UserComponent,
    UserGroupComponent,
    ModuleListComponent,
    ModuleFormComponent,
    EntityTypeFieldFormComponent,
    EntityTypeFieldListComponent,
    EntityTypeListComponent,
    EntityTypeFormComponent
  ],
  imports: [CommonModule,  AdminRoutingModule, HttpClientModule, FormsModule, AceEditorModule, SharedModule],
  exports: [
    RouterModule,
    ModuleComponent,
    EntityTypeComponent,
    EntityTypeFieldComponent,
    GlobalConfigComponent,
    DashboardComponent,
    UserComponent,
    UserGroupComponent,
    ModuleListComponent,
    ModuleFormComponent,
    EntityTypeFieldListComponent,
    EntityTypeListComponent,
    EntityTypeFormComponent
  ],
  providers: [
    ModuleService,
    EntityTypeService,
    EntityTypeFieldService
  ]
})
export class AdminModule {}
