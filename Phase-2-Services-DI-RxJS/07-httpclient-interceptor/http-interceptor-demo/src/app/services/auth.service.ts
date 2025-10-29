import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = 'sample-jwt-token-12345';

  constructor() {}

  getToken(): string {
    return this.token;
  }
}
