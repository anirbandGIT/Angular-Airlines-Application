import { NgModule } from '@angular/core';
import { StaffRoutingModule } from './staff-routing.module';

import { StaffAncillaryServicesComponent } from './components/staff-ancillary-services/staff-ancillary-services.component';
import { StaffDashboardComponent } from './components/staff-dashboard/staff-dashboard.component';
import { StaffLayoutComponent } from './components/staff-layout/staff-layout.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './components/play/basic-form/basic-form.component';
import { NestedFormComponent } from './components/play/nested-form/nested-form.component';
import { DynamicFormComponent } from './components/play/dynamic-form/dynamic-form.component';
import { PlayComponent } from './components/play/play.component';

@NgModule({
  declarations: [
    StaffLayoutComponent,
    StaffDashboardComponent,
    StaffAncillaryServicesComponent,
    // play
    PlayComponent, // holder
    BasicFormComponent,
    NestedFormComponent,
    DynamicFormComponent,
  ],
  imports: [CommonModule, StaffRoutingModule, SharedModule],
})
export class StaffModule {}
