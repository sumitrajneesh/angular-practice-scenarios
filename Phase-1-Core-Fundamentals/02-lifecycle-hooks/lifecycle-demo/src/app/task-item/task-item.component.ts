import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-task-item',
  template: `
    <div class="task-item">
      <ng-content></ng-content> <!-- projected content -->
      <p><strong>{{task.title}}</strong> - {{task.status}}</p>
    </div>
  `
})
export class TaskItemComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked {
  @Input() task: any;

  constructor() {
    console.log('TaskItem: Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('TaskItem: ngOnChanges called', changes);
  }

  ngOnInit() {
    console.log('TaskItem: ngOnInit called');
  }

  ngAfterContentInit() {
    console.log('TaskItem: ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('TaskItem: ngAfterContentChecked called');
  }

  ngOnDestroy() {
    console.log('TaskItem: ngOnDestroy called');
  }
}
