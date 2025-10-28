import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  tasks = [
    { title: 'Prepare Resume', status: 'Pending' },
    { title: 'Practice Angular', status: 'In Progress' },
  ];

  @ViewChildren(TaskItemComponent) taskItems!: QueryList<TaskItemComponent>;

  ngOnInit() {
    console.log('TaskList: ngOnInit called');
  }

  ngDoCheck() {
    console.log('TaskList: ngDoCheck called');
  }

  ngAfterViewInit() {
    console.log('TaskList: ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('TaskList: ngAfterViewChecked called');
  }

  addTask() {
    this.tasks.push({ title: 'Mock Interview', status: 'Pending' });
  }

  removeTask() {
    this.tasks.pop();
  }
}
