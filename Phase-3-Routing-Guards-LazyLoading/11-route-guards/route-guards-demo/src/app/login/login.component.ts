import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  loginAsUser() {
    this.auth.login('user');
  }

  loginAsAdmin() {
    this.auth.login('admin');
  }
}
