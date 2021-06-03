import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.authService.userValue;
    const token = this.authService.tokenValue;

    if (user && token && token !== '') {
      // let authService = this.injector.get(AuthService); // get instance of AuthService
      req = req.clone({
        setHeaders: {
          _authHeader: `Bearer ${token}`,
        },
      });
    }
    return next.handle(req);
  }
}
