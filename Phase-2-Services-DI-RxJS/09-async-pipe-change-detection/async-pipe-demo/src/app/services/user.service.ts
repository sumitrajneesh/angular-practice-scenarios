import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersSubject = new BehaviorSubject<string[]>(['John', 'Emma', 'Alex']);
  users$: Observable<string[]> = this.usersSubject.asObservable();

  addUser(newUser: string) {
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([...currentUsers, newUser]);
  }
}
