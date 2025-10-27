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
