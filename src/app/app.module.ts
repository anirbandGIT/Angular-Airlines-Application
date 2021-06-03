import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// routing module
import { AppRoutingModule } from './app-routing.module';
// other modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
// import { SnackbarService } from './shared/services/snackbar/snackbar.service';
import { PreLoginLayoutComponent } from './core/components/layouts/pre-login-layout/pre-login-layout.component';
import { PostLoginLayoutComponent } from './core/components/layouts/post-login-layout/post-login-layout.component';
import { PreLoginHeaderComponent } from './core/components/partials/pre-login-header/pre-login-header.component';
import { PreLoginFooterComponent } from './core/components/partials/pre-login-footer/pre-login-footer.component';
import { PostLoginFooterComponent } from './core/components/partials/post-login-footer/post-login-footer.component';
import { PostLoginHeaderComponent } from './core/components/partials/post-login-header/post-login-header.component';
import { PassengerSelectionDialogComponent } from './staff/components/passenger-selection-dialog/passenger-selection-dialog.component';
// interceptors
import { TokenInterceptorService } from './core/helpers/interceptors/token-interceptor.service';
import { ErrorInterceptorService } from './core/helpers/interceptors/error-interceptor.service';

// highchart
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PreLoginLayoutComponent,
    PostLoginLayoutComponent,
    PreLoginHeaderComponent,
    PreLoginFooterComponent,
    PostLoginFooterComponent,
    PostLoginHeaderComponent,
    PassengerSelectionDialogComponent,
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [PassengerSelectionDialogComponent],
})
export class AppModule {}
