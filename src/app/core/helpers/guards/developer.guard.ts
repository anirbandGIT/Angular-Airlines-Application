import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DeveloperGuard implements CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const user = this.authService.userValue;

    if (
      user &&
      childRoute.data.allowedRoles &&
      childRoute.data.allowedRoles.indexOf(user[0].role) === -1
    ) {
      this.router.navigate(['/layout/staff/dashboard']);
      return false;
    } else {
      return true;
    }
  }
}
