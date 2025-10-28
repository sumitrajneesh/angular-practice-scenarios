🧩 Angular 8 Lifecycle Hooks Mini Project – Task Tracker Demo
📘 Overview

This project demonstrates all 8 Angular lifecycle hooks in a realistic parent-child component scenario using Angular 8.
The mini project — Task Tracker — helps understand how Angular components are created, updated, checked, and destroyed during an app’s lifecycle.

It’s ideal for interviews (3+ years experience), portfolio demos, or internal documentation for team training.

🚀 Tech Stack

Angular 8

TypeScript

HTML5 / CSS3

Node.js + Angular CLI

🏗️ Project Structure
```bash
src/app/
 ├── app.component.ts
 ├── app.component.html
 ├── task-list/
 │     ├── task-list.component.ts
 │     ├── task-list.component.html
 ├── task-item/
 │     ├── task-item.component.ts
 │     ├── task-item.component.html


TaskListComponent (Parent) – Manages task collection, demonstrates ngDoCheck, ngAfterViewInit, ngAfterViewChecked

TaskItemComponent (Child) – Displays individual tasks, demonstrates ngOnChanges, ngOnInit, ngAfterContentInit, ngAfterContentChecked, and ngOnDestroy

⚙️ Setup & Run
npm install -g @angular/cli@8
ng new lifecycle-demo --style css --routing false
cd lifecycle-demo
# Add the components
ng g c task-list
ng g c task-item
# Replace files with the provided code
ng serve


Then visit 👉 http://localhost:4200

🧠 Lifecycle Hooks in Angular 8

Angular provides 8 key lifecycle hooks that allow developers to tap into different phases of a component’s creation, change detection, and destruction cycle.

Below is the technical explanation with where and why each is used.

1️⃣ ngOnChanges(changes: SimpleChanges)

Where: TaskItemComponent
When: Called before ngOnInit(), whenever an @Input() property value changes.

Purpose:

Detects and reacts to changes in input-bound properties passed from a parent.

Ideal for triggering logic when parent data updates.

ngOnChanges(changes: SimpleChanges) {
  console.log('TaskItem: ngOnChanges called', changes);
}

2️⃣ ngOnInit()

Where: Both Parent & Child Components
When: Called once after the first ngOnChanges().

Purpose:

Ideal for initialization logic, fetching data, and preparing component state.

ngOnInit() {
  console.log('TaskItem: ngOnInit called');
}

3️⃣ ngDoCheck()

Where: TaskListComponent (Parent)
When: Runs during every change detection cycle, after ngOnChanges().

Purpose:

Allows custom change detection logic.

Used when Angular’s default detection doesn’t track certain deep object mutations.

ngDoCheck() {
  console.log('TaskList: ngDoCheck called');
}

4️⃣ ngAfterContentInit()

Where: TaskItemComponent
When: Called once after Angular projects external content (<ng-content>) into the component view.

Purpose:

Useful when components accept projected content (like a slot in React).

ngAfterContentInit() {
  console.log('TaskItem: ngAfterContentInit called');
}

5️⃣ ngAfterContentChecked()

Where: TaskItemComponent
When: Called after every check of projected content.

Purpose:

Executes whenever projected content changes.

Helps verify or manipulate DOM after content updates.

ngAfterContentChecked() {
  console.log('TaskItem: ngAfterContentChecked called');
}

6️⃣ ngAfterViewInit()

Where: TaskListComponent
When: Called once after Angular initializes component views and child views.

Purpose:

Used to access child components or DOM elements via @ViewChild() or @ViewChildren().

Ideal for initializing third-party libraries dependent on DOM rendering.

@ViewChildren(TaskItemComponent) taskItems!: QueryList<TaskItemComponent>;

ngAfterViewInit() {
  console.log('TaskList: ngAfterViewInit called');
  console.log('Total Child Components:', this.taskItems.length);
}

7️⃣ ngAfterViewChecked()

Where: TaskListComponent
When: Called after every check of component’s view and child views.

Purpose:

Runs after Angular checks the view for updates.

Often used for debugging or post-render DOM manipulations.

ngAfterViewChecked() {
  console.log('TaskList: ngAfterViewChecked called');
}

8️⃣ ngOnDestroy()

Where: TaskItemComponent
When: Called just before Angular destroys the component.

Purpose:

Used for cleanup activities such as unsubscribing Observables, stopping timers, or detaching event handlers.

ngOnDestroy() {
  console.log('TaskItem: ngOnDestroy called');
}

🔄 Lifecycle Execution Order (Parent-Child)

Below is the sequence of lifecycle hook execution when the app runs and components are created:

Parent Constructor
Parent ngOnInit
Child Constructor
Child ngOnChanges
Child ngOnInit
Child ngAfterContentInit
Child ngAfterContentChecked
Parent ngAfterViewInit
Parent ngAfterViewChecked


When a child component is destroyed (for example, after removing a task):

Child ngOnDestroy

💬 Example Output in Console
TaskList: Constructor called
TaskList: ngOnInit called
TaskItem: Constructor called
TaskItem: ngOnChanges called
TaskItem: ngOnInit called
TaskItem: ngAfterContentInit called
TaskItem: ngAfterContentChecked called
TaskList: ngAfterViewInit called
TaskList: ngAfterViewChecked called


Adding or removing a task dynamically will trigger additional cycles (ngDoCheck, ngAfterViewChecked, and ngOnDestroy).

🧩 Project Highlights

Demonstrates all 8 Angular lifecycle hooks in one clean example.

Explains parent-child interaction through @Input() and projected content.

Shows real console sequence to visualize how Angular internally creates, updates, and destroys components.

Perfect for interview discussions and hands-on demonstrations.

🧑‍💻 How to Explain in Interview

“I created a mini project using Angular 8 called Task Tracker to understand and demonstrate the complete lifecycle of Angular components.
It has a parent component managing tasks and a child component displaying them.
The project shows when each hook is triggered — for example, ngOnChanges when data updates, ngAfterViewInit when child components load, and ngOnDestroy when a component is removed.
It helped me deeply understand Angular’s component lifecycle and how to use hooks effectively in production apps for DOM access, cleanup, and performance monitoring.”