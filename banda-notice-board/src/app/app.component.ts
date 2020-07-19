import { Component } from '@angular/core';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'banda-notice-board';
  email: string;
  password: string;
  constructor(public auth: AuthService) {}

  signup() {
    this.auth.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.auth.login(this.email, this.password);
    this.email = this.password = '';
  }

}
