# 🧾 Dynamic Task Highlighter using Custom Directives (Angular 8)

### 🎯 Objective
This mini project demonstrates the practical use of **Angular Directives** — both **custom** and **built-in** — in a real-world scenario.  
It helps interviewers assess your understanding of how to extend Angular’s HTML vocabulary with custom logic and reusable components.

---

## 🧠 Concepts Covered
| Concept Type | Directive | Purpose |
|---------------|------------|----------|
| **Built-in** | `*ngFor`, `*ngIf`, `[ngClass]`, `[ngStyle]` | Display, condition, styling |
| **Custom Attribute Directive** | `appHighlightTask` | Dynamically style tasks based on priority and hover |
| **Custom Structural Directive** | `*appIfRole` | Conditionally render elements based on user role |
| **Core Concepts** | `Renderer2`, `ElementRef`, `TemplateRef`, `ViewContainerRef`, `@Input`, `@HostListener` | DOM manipulation and dynamic rendering |

---

## 🧩 Project Overview

This app displays a **Task Board** with a list of tasks.  
Each task:
- Highlights differently based on its **priority (High/Medium/Low)**.  
- Allows only **admin** users to see **Edit/Delete** buttons (using custom structural directive).

---

## 🏗️ Project Structure

```bash
angular-directives-demo/
│
├── src/
│ ├── app/
│ │ ├── directives/
│ │ │ ├── highlight-task.directive.ts
│ │ │ └── if-role.directive.ts
│ │ ├── components/
│ │ │ ├── task-list/
│ │ │ │ ├── task-list.component.ts
│ │ │ │ ├── task-list.component.html
│ │ │ │ └── task-list.component.css
│ │ ├── app.module.ts
│ │ └── app.component.html
│ └── main.ts



---

## 🧩 1️⃣ `appHighlightTask` — Custom Attribute Directive

### File: `highlight-task.directive.ts`
```typescript
import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightTask]'
})
export class HighlightTaskDirective {
  @Input('appHighlightTask') priority: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setInitialHighlight();
  }

  private setInitialHighlight() {
    if (this.priority === 'High') {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid red');
    } else if (this.priority === 'Medium') {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid orange');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid green');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#f1f1f1');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}

## 🧩 2️⃣ *appIfRole — Custom Structural Directive

File: if-role.directive.ts

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfRole]'
})
export class IfRoleDirective {
  private currentUserRole = 'admin'; // can be dynamic from AuthService

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appIfRole(role: string) {
    if (role === this.currentUserRole) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

## 🧩 3️⃣ Component: TaskListComponent
File: task-list.component.ts

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

File: task-list.component.html

<h2>🧾 Task Board</h2>

<div *ngFor="let task of tasks" [appHighlightTask]="task.priority" class="task-card">
  <h4>{{ task.title }}</h4>
  <p>Priority: {{ task.priority }}</p>

  <!-- Visible only if role is 'admin' -->
  <div *appIfRole="'admin'">
    <button>Edit</button>
    <button>Delete</button>
  </div>
</div>


File: task-list.component.css

.task-card {
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: 0.3s;
}
.task-card:hover {
  transform: scale(1.02);
}

🧩 4️⃣ Module Setup
File: app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HighlightTaskDirective } from './directives/highlight-task.directive';
import { IfRoleDirective } from './directives/if-role.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    HighlightTaskDirective,
    IfRoleDirective
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

File: app.component.html

<app-task-list></app-task-list>

⚙️ Steps to Run

# Step 1: Create project
ng new angular-directives-demo

# Step 2: Navigate
cd angular-directives-demo

# Step 3: Generate components and directives
ng g c components/task-list
ng g d directives/highlight-task
ng g d directives/if-role

# Step 4: Replace code from this README

# Step 5: Run the app
ng serve

🎨 Output Preview

✅ Each task displays with a colored left border (based on priority).
✅ Hovering changes background color using Renderer2.
✅ Admin-only buttons appear using structural directive logic.

🧾 Interview Talking Points

You can highlight these during discussion:

Difference between structural and attribute directives.

Usage of Renderer2 for DOM safety.

Real-world use cases: permissions, role-based access, and conditional UI updates.

Advantages of custom directives over repeated template logic.