import { Component } from '@angular/core';

@Component({
  selector: 'app-task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {
  tasks = [
    { id: 1, title: 'Complete Angular project', done: false },
    { id: 2, title: 'Write documentation', done: false },
    { id: 3, title: 'Push code to GitHub', done: false }
  ];

  markAsDone(taskId: number) {
    this.tasks = this.tasks.map(task =>
      task.id === taskId ? { ...task, done: true } : task
    );
  }
}
