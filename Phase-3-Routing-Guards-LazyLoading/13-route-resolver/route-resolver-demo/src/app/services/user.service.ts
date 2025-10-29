import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@gmail.com', phone: '1234567890' },
    { id: 2, name: 'Bob Smith', email: 'bob@gmail.com', phone: '0987654321' },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(1000)); // simulate API delay
  }

  getUserById(id: number): Observable<User> {
    const user = this.users.find(u => u.id === id);
    return of(user).pipe(delay(1000));
  }
}
