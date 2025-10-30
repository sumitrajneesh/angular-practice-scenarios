import { Component, OnInit } from '@angular/core';
import { StateService, Task } from '../../services/state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.tasks$ = this.stateService.tasks$;
  }

  toggleTask(id: number) {
    this.stateService.toggleTaskCompletion(id);
  }

  deleteTask(id: number) {
    this.stateService.deleteTask(id);
  }
}
