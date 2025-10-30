import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {
  taskTitle = '';

  constructor(private stateService: StateService) {}

  addTask() {
    if (this.taskTitle.trim()) {
      this.stateService.addTask(this.taskTitle);
      this.taskTitle = '';
    }
  }
}
