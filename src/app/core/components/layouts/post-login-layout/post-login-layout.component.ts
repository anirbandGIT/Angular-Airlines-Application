import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-post-login-layout',
  templateUrl: './post-login-layout.component.html',
  styleUrls: ['./post-login-layout.component.scss'],
})
export class PostLoginLayoutComponent implements OnInit {
  public userInfo: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userInfo = this.authService.userValue;
    console.log('POST LOGIN LAYOUT', this.userInfo);
  }
}
