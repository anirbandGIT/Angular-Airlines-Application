import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.userValue;

    // console.log('USER OBJ in AuthGuard', user);
    if (user) {
      if (
        route.data.allowedRoles &&
        route.data.allowedRoles.indexOf(user[0].role) === -1
      ) {
        // allowed role not authorised so redirect to login

        // this.router.navigate(['/login']); // BLOCKING
        // return false;

        // redirect as needed if role does not match but login is successful
        const redirectURL =
          user[0].role === 'ADMIN'
            ? '/layout/admin/dashboard'
            : '/layout/staff/dashboard';
        this.router.navigate([redirectURL]);
      }

      // user is authorised
      return true;
    }

    // if users is not found then the user is not logged in, then redirect to login
    this.router.navigate(['/login'], {
      queryParams: { redirectAfterLoginURL: state.url }, // SKIP if always redirect to respective dashboard
    });
    return false;
  }
}
