import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { StaffLayoutComponent } from './components/staff-layout/staff-layout.component';
import { StaffAncillaryServicesComponent } from './components/staff-ancillary-services/staff-ancillary-services.component';
import { StaffDashboardComponent } from './components/staff-dashboard/staff-dashboard.component';
// play
import { PlayComponent } from './components/play/play.component';
import { BasicFormComponent } from './components/play/basic-form/basic-form.component';
import { NestedFormComponent } from './components/play/nested-form/nested-form.component';
import { DynamicFormComponent } from './components/play/dynamic-form/dynamic-form.component';
// guard
import { DeveloperGuard } from '../core/helpers/guards/developer.guard';
import { FormGuard } from '../core/helpers/guards/form.guard';

const routes: Routes = [
  {
    path: '',
    component: StaffLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: StaffDashboardComponent },
      {
        path: 'service/:serviceType',
        component: StaffAncillaryServicesComponent,
      },
      // play
      {
        path: 'play',
        component: PlayComponent,
        canActivateChild: [DeveloperGuard],
        children: [
          {
            path: '',
            redirectTo: 'basicform',
            data: { allowedRoles: 'DEVELOPER' },
          },
          {
            path: 'basicform',
            component: BasicFormComponent,
            data: { allowedRoles: 'DEVELOPER' },
            canDeactivate: [FormGuard],
          },
          {
            path: 'nestedform',
            component: NestedFormComponent,
            data: { allowedRoles: 'DEVELOPER' },
          },
          {
            path: 'dynamicform',
            component: DynamicFormComponent,
            data: { allowedRoles: 'DEVELOPER' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [FormGuard],
})
export class StaffRoutingModule {}
