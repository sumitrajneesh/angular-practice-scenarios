import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private tasks = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasks.asObservable();

  private currentId = 1;

  addTask(title: string) {
    const newTask: Task = { id: this.currentId++, title, completed: false };
    const updatedTasks = [...this.tasks.value, newTask];
    this.tasks.next(updatedTasks);
  }

  toggleTaskCompletion(id: number) {
    const updatedTasks = this.tasks.value.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasks.next(updatedTasks);
  }

  deleteTask(id: number) {
    const updatedTasks = this.tasks.value.filter(task => task.id !== id);
    this.tasks.next(updatedTasks);
  }
}
