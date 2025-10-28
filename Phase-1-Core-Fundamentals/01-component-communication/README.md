# 01 - Component Communication (Angular 8 Practice)

This mini-project demonstrates **Parent-Child component communication** in **Angular 8** using `@Input()` and `@Output()` decorators.

---

## 🏗️ Project Setup

### 1️⃣ Create the workspace with Angular 8

```bash
cd F:\angular-practice-scenarios\Phase-1-Core-Fundamentals
npx -p @angular/cli@8 ng new component-communication-demo --skip-tests --routing=false --style=css

```bash
src/app/
├── parent/
│   ├── parent.component.ts
│   ├── parent.component.html
│   └── parent.component.css
├── child/
│   ├── child.component.ts
│   ├── child.component.html
│   └── child.component.css
├── app.module.ts
└── app.component.html

```bash
cd component-communication-demo
npx ng serve

# 🧩 Angular 8 – TaskBoard Component Communication

This mini-project demonstrates **Parent ↔ Child communication** in Angular using:

- **@Input()** → Parent ➜ Child data flow  
- **@Output() + EventEmitter** → Child ➜ Parent event flow  
- **Property Binding `[ ]`** and **Event Binding `( )`**

---

## ⚙️ Project Structure

``` bash
src/
│
├── app/
│ ├── taskboard/
│ │ ├── taskboard.component.ts
│ │ ├── taskboard.component.html
│ │ └── taskboard.component.css
│ │
│ ├── task-item/
│ │ ├── task-item.component.ts
│ │ ├── task-item.component.html
│ │ └── task-item.component.css
│ │
│ ├── app.module.ts
│ └── app.component.html
│
└── README.md



---

## 🧠 Concept Recap

### 1️⃣ Parent ➜ Child Communication (`@Input()` + Property Binding)

The parent component (`TaskboardComponent`) **sends data** to the child component (`TaskItemComponent`) using property binding.

```html
<!-- Parent HTML -->
<app-task-item [task]="task"></app-task-item>

// child.component.ts
@Input() task: any;

💡 \[task\]=“task”

Left side (\[task\]) → child component’s property (decorated with @Input)

Right side (task) → parent’s variable value

2️⃣ Child ➜ Parent Communication (@Output() + EventEmitter)

The child component emits events to inform the parent about user actions.

<!-- Parent HTML -->  
<app-task-item  
\[task\]=“task”  
(taskCompleted)=“markAsDone($event)”>  
</app-task-item>

// child.component.ts  
@Output() taskCompleted = new EventEmitter<number>();

completeTask() {  
this.taskCompleted.emit([this.task.id](http://this.task.id));  
}

💡 (taskCompleted)=“markAsDone($event)”

Left side ((taskCompleted)) → child’s event

Right side (markAsDone($event)) → parent’s event handler

📜 Full Flow Explanation

TaskboardComponent holds the task list:

tasks = \[  
{ id: 1, title: ‘Build Angular App’, completed: false },  
{ id: 2, title: ‘Integrate Spring Boot API’, completed: false }  
\];

It renders a list of <app-task-item> components:

<div \*ngFor=“let task of tasks”>  
<app-task-item  
\[task\]=“task”  
(taskCompleted)=“markAsDone($event)”>  
</app-task-item>  
</div>

Each TaskItemComponent receives its task via @Input().

When a user clicks “Complete”, the child calls:

this.taskCompleted.emit([this.task.id](http://this.task.id));

The parent’s method markAsDone(id) runs:

markAsDone(id: number) {  
const task = this.tasks.find(t => [t.id](http://t.id) === id);  
if (task) task.completed = true;  
}

✅ Data flows down via \[task\]  
✅ Events flow up via (taskCompleted)

🧩 Angular Binding Summary  
Syntax Type Direction Description  
\[property\]=“value” Property Binding Parent ➜ Child Sends data to child component  
(event)=“handler($event)” Event Binding Child ➜ Parent Receives event from child  
\[(ngModel)\]=“value” Two-way Binding Both Used in Forms (Template-driven)  
🧰 Useful Commands

Generate components
===================

ng generate component taskboard  
ng generate component task-item

Serve application
=================

ng serve --open

📘 Key Takeaways

Use @Input() for passing data downward.

Use @Output() + EventEmitter for passing data upward.

\[\] = Property Binding

() = Event Binding

Keep the parent focused on data/state, and the child focused on UI interaction