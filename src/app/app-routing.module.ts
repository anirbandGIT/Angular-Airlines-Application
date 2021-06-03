import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { PreLoginLayoutComponent } from './core/components/layouts/pre-login-layout/pre-login-layout.component';
import { PostLoginLayoutComponent } from './core/components/layouts/post-login-layout/post-login-layout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

import { AuthGuard } from './core/helpers/guards/auth.guard';

const LazyAdminModule = () =>
  import('./admin/admin.module').then((response) => response.AdminModule);
const LazyStaffModule = () =>
  import('./staff/staff.module').then((response) => response.StaffModule);

const routes: Routes = [
  { path: 'login', component: PreLoginLayoutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirect if going to /
  {
    path: 'layout',
    component: PostLoginLayoutComponent,
    children: [
      // { path: '', redirectTo: '/staff-dashboard', pathMatch: 'full' },
      {
        path: 'staff',
        loadChildren: LazyStaffModule,
        canActivate: [AuthGuard],
        // allow access to role matching STAFF only
        data: { allowedRoles: ['STAFF', 'DEVELOPER'] },
      },
      {
        path: 'admin',
        loadChildren: LazyAdminModule,
        canActivate: [AuthGuard],
        // allow access to role matching ADMIN only
        data: { allowedRoles: ['ADMIN', 'DEVELOPER'] }, // data: { allowedRoles: 'ADMIN' }
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent }, // wildcard redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // below code is to enable tracing during route navigation
  // imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
