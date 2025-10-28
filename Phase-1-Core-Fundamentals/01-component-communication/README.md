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

<p class="has-line-data" data-line-start="0" data-line-end="1">💡 [task]=“task”</p>
<p class="has-line-data" data-line-start="2" data-line-end="3">Left side ([task]) → child component’s property (decorated with @Input)</p>
<p class="has-line-data" data-line-start="4" data-line-end="5">Right side (task) → parent’s variable value</p>
<p class="has-line-data" data-line-start="6" data-line-end="7">2️⃣ Child ➜ Parent Communication (@Output() + EventEmitter)</p>
<p class="has-line-data" data-line-start="8" data-line-end="9">The child component emits events to inform the parent about user actions.</p>
<p class="has-line-data" data-line-start="10" data-line-end="15">&lt;!-- Parent HTML --&gt;<br>
&lt;app-task-item<br>
[task]=“task”<br>
(taskCompleted)=“markAsDone($event)”&gt;<br>
&lt;/app-task-item&gt;</p>
<p class="has-line-data" data-line-start="16" data-line-end="18">// child.component.ts<br>
@Output() taskCompleted = new EventEmitter&lt;number&gt;();</p>
<p class="has-line-data" data-line-start="19" data-line-end="22">completeTask() {<br>
this.taskCompleted.emit(<a href="http://this.task.id">this.task.id</a>);<br>
}</p>
<p class="has-line-data" data-line-start="24" data-line-end="25">💡 (taskCompleted)=“markAsDone($event)”</p>
<p class="has-line-data" data-line-start="26" data-line-end="27">Left side ((taskCompleted)) → child’s event</p>
<p class="has-line-data" data-line-start="28" data-line-end="29">Right side (markAsDone($event)) → parent’s event handler</p>
<p class="has-line-data" data-line-start="30" data-line-end="31">📜 Full Flow Explanation</p>
<p class="has-line-data" data-line-start="32" data-line-end="33">TaskboardComponent holds the task list:</p>
<p class="has-line-data" data-line-start="34" data-line-end="38">tasks = [<br>
{ id: 1, title: ‘Build Angular App’, completed: false },<br>
{ id: 2, title: ‘Integrate Spring Boot API’, completed: false }<br>
];</p>
<p class="has-line-data" data-line-start="40" data-line-end="41">It renders a list of &lt;app-task-item&gt; components:</p>
<p class="has-line-data" data-line-start="42" data-line-end="48">&lt;div *ngFor=“let task of tasks”&gt;<br>
&lt;app-task-item<br>
[task]=“task”<br>
(taskCompleted)=“markAsDone($event)”&gt;<br>
&lt;/app-task-item&gt;<br>
&lt;/div&gt;</p>
<p class="has-line-data" data-line-start="50" data-line-end="51">Each TaskItemComponent receives its task via @Input().</p>
<p class="has-line-data" data-line-start="52" data-line-end="53">When a user clicks “Complete”, the child calls:</p>
<p class="has-line-data" data-line-start="54" data-line-end="55">this.taskCompleted.emit(<a href="http://this.task.id">this.task.id</a>);</p>
<p class="has-line-data" data-line-start="57" data-line-end="58">The parent’s method markAsDone(id) runs:</p>
<p class="has-line-data" data-line-start="59" data-line-end="63">markAsDone(id: number) {<br>
const task = this.tasks.find(t =&gt; <a href="http://t.id">t.id</a> === id);<br>
if (task) task.completed = true;<br>
}</p>
<p class="has-line-data" data-line-start="65" data-line-end="67">✅ Data flows down via [task]<br>
✅ Events flow up via (taskCompleted)</p>
<p class="has-line-data" data-line-start="68" data-line-end="74">🧩 Angular Binding Summary<br>
Syntax  Type    Direction   Description<br>
[property]=“value”  Property Binding    Parent ➜ Child  Sends data to child component<br>
(event)=“handler($event)”   Event Binding   Child ➜ Parent  Receives event from child<br>
[(ngModel)]=“value” Two-way Binding Both    Used in Forms (Template-driven)<br>
🧰 Useful Commands</p>
<h1 class="code-line" data-line-start=74 data-line-end=75 ><a id="Generate_components_74"></a>Generate components</h1>
<p class="has-line-data" data-line-start="75" data-line-end="77">ng generate component taskboard<br>
ng generate component task-item</p>
<h1 class="code-line" data-line-start=78 data-line-end=79 ><a id="Serve_application_78"></a>Serve application</h1>
<p class="has-line-data" data-line-start="79" data-line-end="80">ng serve --open</p>
<p class="has-line-data" data-line-start="81" data-line-end="82">📘 Key Takeaways</p>
<p class="has-line-data" data-line-start="83" data-line-end="84">Use @Input() for passing data downward.</p>
<p class="has-line-data" data-line-start="85" data-line-end="86">Use @Output() + EventEmitter for passing data upward.</p>
<p class="has-line-data" data-line-start="87" data-line-end="88">[] = Property Binding</p>
<p class="has-line-data" data-line-start="89" data-line-end="90">() = Event Binding</p>
<p class="has-line-data" data-line-start="91" data-line-end="92">Keep the parent focused on data/state, and the child focused on UI interaction</p>
