🧩 Angular 8 — Custom Directives & Pipes Mini Project
🎯 Objective

This mini project demonstrates how to create and use Custom Directives and Custom Pipes in Angular 8, focusing on practical use cases relevant for 3+ years experienced developers.

🏗️ Project Overview
🔹 Features Covered

✅ Custom Attribute Directive → Highlight elements dynamically

✅ Custom Structural Directive → Conditional DOM rendering (like *ngIf)

✅ Custom Pipes → Text truncation and array filtering

✅ Built-in Pipes → Date, Uppercase, Lowercase

✅ Data Binding → [(ngModel)], *ngFor, and property binding

✅ Component Communication → Organized folder structure and reusable components

📁 Project Structure
```bash
custom-directives-pipes-demo/
│
├── src/
│   ├── app/
│   │   ├── directives/
│   │   │   ├── highlight.directive.ts
│   │   │   ├── unless.directive.ts
│   │   │
│   │   ├── pipes/
│   │   │   ├── truncate.pipe.ts
│   │   │   ├── filter.pipe.ts
│   │   │
│   │   ├── components/
│   │   │   ├── user-list/
│   │   │   │   ├── user-list.component.ts
│   │   │   │   ├── user-list.component.html
│   │   │   ├── pipes-demo/
│   │   │   │   ├── pipes-demo.component.ts
│   │   │   │   ├── pipes-demo.component.html
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.module.ts
│   │
│   ├── index.html
│   ├── main.ts
│
└── angular.json

⚙️ Installation & Setup
```bash
1️⃣ Create Project
ng new custom-directives-pipes-demo --routing=false --style=css
cd custom-directives-pipes-demo

2️⃣ Generate Components, Directives, and Pipes
ng g c components/user-list
ng g c components/pipes-demo
ng g d directives/highlight
ng g d directives/unless
ng g p pipes/truncate
ng g p pipes/filter

3️⃣ Run the Project
ng serve -o


Runs at 👉 http://localhost:4200

🧱 Implementation Details
🟩 Custom Attribute Directive — HighlightDirective
```bash
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @Input() appHighlight: string;
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() { this.highlight(this.appHighlight || 'yellow'); }
  @HostListener('mouseleave') onMouseLeave() { this.highlight(null); }
  private highlight(color: string) { this.el.nativeElement.style.backgroundColor = color; }
}


📘 Used to dynamically change background color on hover.

🟦 Custom Structural Directive — UnlessDirective
```bash
@Directive({ selector: '[appUnless]' })
export class UnlessDirective {
  private hasView = false;
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.vcRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.vcRef.clear();
      this.hasView = false;
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
}


📘 Opposite of *ngIf — shows the element only if the condition is false.

🟨 Custom Pipes
🔸 TruncatePipe
```bash
@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}

🔸 FilterPipe
```bash
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) return items;
    return items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
  }
}

🧩 UserListComponent

Demonstrates custom directives + pipes.
```bash
<h2>User List</h2>
<input [(ngModel)]="searchText" placeholder="Search user" />
<ul>
  <li *ngFor="let user of users | filter:searchText" [appHighlight]="'lightyellow'">
    {{ user.name }} - {{ user.description | truncate:30 }}
  </li>
</ul>
<p *appUnless="isVisible">This text shows only if isVisible is false.</p>

🧩 PipesDemoComponent

Demonstrates both built-in and custom pipes.
```bash
<h3>Built-in Pipes</h3>
<p>{{ today | date:'fullDate' }}</p>
<p>{{ user.name | uppercase }}</p>
<p>{{ user.role | lowercase }}</p>

<h3>Custom Truncate Pipe</h3>
<p>{{ user.bio | truncate:50 }}</p>

<h3>Custom Filter Pipe</h3>
<input [(ngModel)]="searchText" placeholder="Search user" />
<ul>
  <li *ngFor="let person of users | filter:searchText">
    {{ person.name }} - {{ person.city }}
  </li>
</ul>

🧠 Interview Talking Points
Concept	How You Can Explain It
Attribute Directive	Used to modify the behavior or appearance of an existing DOM element. Example: appHighlight changes background on hover.
Structural Directive	Used to add or remove DOM elements. Example: appUnless works opposite to *ngIf.
Custom Pipe	Transforms displayed data in templates — similar to filters. Example: truncate limits text length.
Pure vs Impure Pipes	Pure pipes run only when input changes; impure run on every change detection cycle.
Use Case	Demonstrates reusability, modularity, and real-world UI manipulation.
🧰 Tech Stack
Category	Technology
Frontend	Angular 8
Language	TypeScript
Styling	CSS / Bootstrap
Tools	Angular CLI, Node.js
Data Binding	[(ngModel)], *ngFor, *ngIf
🖥️ How to Explain to Interviewer

“This mini project demonstrates my understanding of Angular core concepts.
I built two custom directives (attribute and structural) and two custom pipes.
The directives handle DOM behavior dynamically — for example, appHighlight highlights on hover and appUnless conditionally renders elements.
The pipes handle data transformation — for example, truncate shortens text and filter searches lists dynamically.
I structured the code modularly using separate folders for components, directives, and pipes, reflecting real-world Angular architecture.”