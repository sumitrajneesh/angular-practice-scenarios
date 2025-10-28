import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  userRole = 'admin';

  tasks = [
    { id: 1, title: 'Fix production bug', priority: 'High' },
    { id: 2, title: 'Prepare release notes', priority: 'Medium' },
    { id: 3, title: 'Refactor login module', priority: 'Low' }
  ];
}
