import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate,
} from '@angular/router';
import { Observable, of } from 'rxjs';

export interface IFormGuard {
  canLeaveForm: () => Observable<boolean> | boolean;
}

@Injectable({ providedIn: 'root' })
export class FormGuard implements CanDeactivate<IFormGuard> {
  constructor(private router: Router) {}

  canDeactivate(
    formComponent: IFormGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return formComponent.canLeaveForm ? formComponent.canLeaveForm() : true;
  }
}
