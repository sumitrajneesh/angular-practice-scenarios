import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users$: Observable<string[]>;

  constructor(private userService: UserService) {
    this.users$ = this.userService.users$;
  }

  addRandomUser() {
    const newUser = 'User_' + Math.floor(Math.random() * 1000);
    this.userService.addUser(newUser);
  }
}
