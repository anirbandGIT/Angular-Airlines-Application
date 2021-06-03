import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-post-login-header',
  templateUrl: './post-login-header.component.html',
  styleUrls: ['./post-login-header.component.scss'],
})
export class PostLoginHeaderComponent implements OnInit {
  @Input() public userInfo: any;
  public navLinks = [
    {
      label: 'Dashboard',
      icon: 'dashboard_interface',
      path: ['layout'],
    },
    {
      label: 'Notification (X)',
      icon: 'bell',
      path: ['layout'],
    },
  ];

  public timerValue: number = 10; // in seconds
  public timerDuration: number = 600000; // in ms
  public spinnerProgressValue: number = 0;

  constructor(private router: Router, private authService: AuthService) {
    this.timerValue = this.timerDuration / 60000; // safeguard
  }

  ngOnInit() {
    this.initiateLinkPath();
    interval(60000)
      .pipe(take(this.timerDuration / 1000))
      .subscribe((time) => {
        const divideBy = 60000;
        this.timerValue = this.timerDuration / divideBy - (time + 1);
        this.spinnerProgressValue =
          ((time + 1) / (this.timerDuration / divideBy)) * 100;
        if (this.timerValue === 0) {
          this.logoutUser(); // need to check if keeps emitting and needs to be cleared
        }
      });
  }

  public initiateLinkPath(): void {
    this.userInfo[0].role === 'ADMIN'
      ? this.navLinks[0].path.push('admin')
      : this.navLinks[0].path.push('staff');
  }

  public handleNavbarLinkClick(linkPath: any): void {
    console.log('linkPath', linkPath);
    // spreading the path as it is an array and needs to come as argument
    this.router.navigate(['/', ...linkPath]);
  }

  public logoutUser(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
