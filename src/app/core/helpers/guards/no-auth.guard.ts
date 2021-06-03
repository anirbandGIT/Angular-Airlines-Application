import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.userValue;

    console.log('USER OBJ in AuthGuard', user);
    if (user) {
      if (
        route.data.allowRoles &&
        route.data.allowRoles.indexOf(user[0].role) === -1
      ) {
        // allowed role not authorised so redirect to login
        this.router.navigate(['/login']);
        return false;
      }

      // user is authorised
      return true;
    }

    // if users is not found then the user is not logged in, then redirect to login
    this.router.navigate(['/login'], {
      queryParams: { redirectAfterLoginURL: state.url },
    });
    return false;
  }
}
