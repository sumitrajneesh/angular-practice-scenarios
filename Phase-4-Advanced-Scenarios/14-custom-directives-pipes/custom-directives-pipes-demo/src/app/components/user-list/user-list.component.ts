import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  searchText = '';
  users = [
    { name: 'John Doe', description: 'Senior Angular Developer from USA' },
    { name: 'Jane Smith', description: 'Full Stack Engineer with 5 years experience' },
    { name: 'Alan Walker', description: 'Frontend Developer specializing in Angular 8' }
  ];

  isVisible = false;
}
