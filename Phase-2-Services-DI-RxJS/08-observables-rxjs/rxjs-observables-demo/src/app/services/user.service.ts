import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    'Sumit Choudhary',
    'Amit Kumar',
    'Rajesh Sharma',
    'Ravi Singh',
    'Neha Verma',
    'Priya Das',
    'Manish Gupta',
    'Karan Patel'
  ];

  constructor() { }

  searchUsers(query: string): Observable<string[]> {
    const filtered = this.users.filter(u =>
      u.toLowerCase().includes(query.toLowerCase())
    );
    // Simulate API delay
    return of(filtered).pipe(delay(500));
  }
}
