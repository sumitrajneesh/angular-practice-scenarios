Dynamic Dashboard – Dynamic Components in Angular 8
📘 Project Summary

This mini project demonstrates how to dynamically load and render components at runtime using Angular 8’s ComponentFactoryResolver, ViewContainerRef, and a custom directive.
It simulates a Dynamic Dashboard where users can choose and load widgets (like Weather, News, Stock, Profile) dynamically without using their selectors in the template.

🎯 Objective

To show understanding of Dynamic Component Loading

To demonstrate use of Directives, ComponentFactoryResolver, and ViewContainerRef

To illustrate modular design and runtime component rendering — a common Angular interview concept for 3+ years experience.

🏗️ Tech Stack
```bash
Category	Technology
Framework	Angular 8
Language	TypeScript
Styling	Bootstrap 4, SCSS
Tools	Angular CLI, Node.js, npm
🧱 Project Folder Structure
dynamic-dashboard/
 ├── src/
 │   ├── app/
 │   │   ├── dashboard/
 │   │   │   ├── dashboard.component.ts
 │   │   │   ├── dashboard.component.html
 │   │   │   └── dashboard.component.scss
 │   │   ├── widgets/
 │   │   │   ├── weather-widget.component.ts
 │   │   │   ├── news-widget.component.ts
 │   │   │   ├── stock-widget.component.ts
 │   │   │   └── profile-widget.component.ts
 │   │   ├── widget-host.directive.ts
 │   │   ├── app.module.ts
 │   │   └── app.component.html
 │   └── main.ts
 └── ...

⚙️ Angular CLI Commands Used
ng new dynamic-dashboard --style=scss
cd dynamic-dashboard
ng g c dashboard
ng g c widgets/weather-widget --flat
ng g c widgets/news-widget --flat
ng g c widgets/stock-widget --flat
ng g c widgets/profile-widget --flat
ng g directive widget-host

💡 Key Angular Concepts Covered

ComponentFactoryResolver for dynamic component creation

ViewContainerRef for injecting components into DOM

Custom directive (WidgetHostDirective) to mark dynamic placeholders

Passing data to dynamically created components via @Input()

Understanding of entryComponents (Angular 8 and below)

🧠 Project Explanation (Interview Use)

“In this project, I created a dynamic dashboard where widgets like Weather, News, Stock, and Profile are not statically added to the template.
Instead, when the user clicks a button, I use Angular’s ComponentFactoryResolver to create the chosen component dynamically and insert it into the view using ViewContainerRef.
The directive WidgetHostDirective acts as a host marker to know where the component should be injected.
This showcases runtime flexibility, memory efficiency, and Angular’s dependency injection in dynamic scenarios.”

🧩 Sample Workflow

User clicks “Weather” button.

Dashboard component calls loadWidget('weather').

ComponentFactoryResolver creates WeatherWidgetComponent.

The component is inserted dynamically at the <ng-template appWidgetHost> location.

Data is passed via @Input() property.

🧾 How to Run
npm install
ng serve -o

🎨 Sample Output
🧩 Dynamic Dashboard using Dynamic Components
[ Weather ] [ News ] [ Stock ] [ Profile ]


Clicking on each button loads the respective widget dynamically inside the dashboard area.

⚠️ Common Interview Error & Fix

Error:
No component factory found for WeatherWidgetComponent. Did you add it to @NgModule.entryComponents?

Fix:
In Angular 8, dynamically loaded components must be listed under entryComponents in app.module.ts.

entryComponents: [
  WeatherWidgetComponent,
  NewsWidgetComponent,
  StockWidgetComponent,
  ProfileWidgetComponent
]

🚀 Learning Outcome

Hands-on understanding of Dynamic Components

Clear differentiation between static and runtime component loading

Ability to explain ComponentFactoryResolver, ViewContainerRef, and Directives confidently in interviews

👨‍💻 Developed By

Sumit Kumar Choudhary
SRE & DevOps Lead | Full Stack Developer | Generative AI Enthusiast