import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public handleError(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    if (error && error.status === 401) {
      // logout if 401 from interceptor automatically
      // refersh token and check if refreshed or not otherwise logout
      this.authService.logout();
      this.router.navigate(['/login']);
    }
    return throwError(error) as Observable<HttpEvent<any>>;
  }
}
