🧩 Task Manager App — State Management in Angular 8
📘 Project Overview

This mini-project demonstrates state management in Angular 8 using BehaviorSubject and RxJS Observables.
It helps manage and share state between multiple components (Add Task & Task List) in a reactive, scalable way — similar to what libraries like NgRx or Akita achieve at a smaller scale.

🎯 Learning Objectives

Understand Component Communication via Services

Implement State Management using BehaviorSubject

Apply Reactive Programming principles (RxJS)

Use AsyncPipe for automatic subscription management

Practice Change Detection and UI reactivity

🏗️ Project Structure
```bash
state-management-demo/
│
└── src/
    └── app/
        ├── services/
        │   └── state.service.ts
        │
        ├── components/
        │   ├── add-task/
        │   │   ├── add-task.component.ts
        │   │   ├── add-task.component.html
        │   │   └── add-task.component.css
        │   │
        │   └── task-list/
        │       ├── task-list.component.ts
        │       ├── task-list.component.html
        │       └── task-list.component.css
        │
        ├── app.component.html
        └── app.module.ts

⚙️ Setup Instructions
1️⃣ Create the Project
```bash
ng new state-management-demo --style=css --routing=false
cd state-management-demo

2️⃣ Generate Service and Components
ng generate service services/state
ng generate component components/add-task
ng generate component components/task-list

3️⃣ Run the Application
ng serve -o


Access the app at 👉 http://localhost:4200

💡 Project Explanation (For Interview)
🧠 1. State Management Logic (state.service.ts)

Uses BehaviorSubject to maintain a reactive list of tasks.

Any change (add, delete, toggle) automatically notifies all subscribed components.

Demonstrates Reactive Data Flow.

🧩 2. Components Interaction

AddTaskComponent → Pushes new tasks to the shared state.

TaskListComponent → Subscribes to the shared state and displays updated task list using AsyncPipe.

🔄 3. Reactive Flow
User Action → Service Method → BehaviorSubject Update → Component UI Reacts Automatically

🧰 4. Tools & Technologies
Tool	Purpose
Angular 8	Frontend framework
RxJS	Reactive programming
BehaviorSubject	Reactive state holder
AsyncPipe	Auto-subscription and UI updates
FormsModule	Two-way binding (ngModel)
🧪 Key Concepts Demonstrated

✅ State Management (Without NgRx)
✅ BehaviorSubject vs Subject
✅ Component Communication via Service
✅ Reactive Streams with RxJS
✅ AsyncPipe and Change Detection
✅ Separation of Concerns (Logic vs UI)

🧠 Interview Talking Points
Question	How to Answer
What is state management in Angular?	It’s the process of managing shared data across components to ensure consistent UI updates.
Why did you use BehaviorSubject?	Because it emits the latest value immediately to new subscribers, ensuring all components are synchronized.
What’s the difference between Subject and BehaviorSubject?	BehaviorSubject stores the current value; Subject doesn’t.
How does AsyncPipe help in Angular?	It auto-subscribes/unsubscribes from observables, preventing memory leaks.
How is this different from NgRx?	NgRx adds Redux-like architecture; here, we use a lightweight manual approach suitable for smaller apps.
📸 Optional Demo Flow (to explain visually)

User enters a task → Clicks Add Task

Task instantly appears in Task List Component

Toggling or deleting tasks updates the UI everywhere automatically

🚀 Future Enhancements

Add localStorage or backend persistence

Introduce NgRx store for complex state

Add filters: All / Completed / Pending

Integrate Angular Material for UI polish

🧾 Summary

“This project demonstrates my understanding of state management and reactive programming in Angular 8.
I used a shared service with BehaviorSubject to maintain a global application state, enabling seamless communication between independent components without relying on a state library like NgRx.”