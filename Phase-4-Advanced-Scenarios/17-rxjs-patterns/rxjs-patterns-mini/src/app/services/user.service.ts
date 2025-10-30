import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Using public GitHub API
  searchUsers(query: string): Observable<any> {
    if (!query.trim()) return of([]);
    return this.http.get(`https://api.github.com/search/users?q=${query}`).pipe(
      delay(500), // simulate network delay
      catchError(err => {
        console.error('Error in API call', err);
        return of([]);
      })
    );
  }
}
