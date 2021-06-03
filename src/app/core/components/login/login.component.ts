import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { Title } from '@angular/platform-browser';
// import { Form } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public redirectURL: string;
  public loading = false;

  constructor(
    private snackbarService: SnackbarService,
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('1 Air | Login');
    this.redirectURL =
      this.route.snapshot.queryParams[`redirectAfterLoginURL`] || null;
    // console.log('LOGIN redirectURL', this.redirectURL);
  }

  public triggerForbidden(message: string): boolean {
    this.snackbarService.openSnackBar(message, 1000);
    return false;
  }

  // public handleLoginFormSubmit(userLoginForm: Form): void {
  public handleLoginFormSubmit(userLoginForm: NgForm): void {
    this.snackbarService.openSnackBar('Attempting login', 1000);
    // console.log('FORM OBJECT', userLoginForm);
    // console.log('SUBMITTED FORM VALUE', userLoginForm.value);

    this.authService
      .login(
        userLoginForm.value.loginUsername,
        userLoginForm.value.loginPassword
      )
      .subscribe(
        (response) => {
          if (response.length === 0) {
            return; // stay in login
          }

          // role based redirection logic
          if (this.redirectURL === null) {
            this.redirectURL =
              response[0].role === 'ADMIN'
                ? '/layout/admin/dashboard'
                : '/layout/staff/dashboard';
          }
          // console.log(this.redirectURL);
          this.router.navigate([this.redirectURL]);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
