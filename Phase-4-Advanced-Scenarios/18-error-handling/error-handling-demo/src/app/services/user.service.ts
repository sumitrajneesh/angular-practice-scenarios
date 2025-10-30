import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUrl).pipe(
      catchError(error => {
        console.error('Service error caught:', error);
        return throwError(error);
      })
    );
  }

  // simulate error
  getInvalidEndpoint() {
    return this.http.get(this.apiUrl + '/invalid').pipe(
      catchError(error => throwError(error))
    );
  }
}
