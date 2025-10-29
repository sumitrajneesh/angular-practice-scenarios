import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn = false;
  private userRole = '';

  constructor(private router: Router) {}

  login(role: string) {
    this.isLoggedIn = true;
    this.userRole = role;
    this.router.navigate(['/dashboard']);
  }

  logout() {
    this.isLoggedIn = false;
    this.userRole = '';
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getRole(): string {
    return this.userRole;
  }
}
