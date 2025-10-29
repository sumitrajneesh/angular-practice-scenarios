🧩 Route Guards Demo — Angular 8 Mini Project
🏗️ Project Overview

This project demonstrates the use of Angular Route Guards to implement route protection, role-based access, and unsaved form change warnings.
It’s designed for interview discussions and hands-on explanation for developers with 3+ years of experience in Angular.

🚀 Features

✅ Authentication Guard (CanActivate) – Protects routes for logged-in users only
✅ Admin Guard (CanActivate) – Restricts access to admin-only routes
✅ Unsaved Changes Guard (CanDeactivate) – Prompts users before navigating away from unsaved forms
✅ Role-based Navigation – Different behavior for user vs admin
✅ Mock Login Flow – Simulated authentication logic

🧠 Concepts Covered

Angular Routing Module

Route Guards: CanActivate, CanDeactivate

Dependency Injection (AuthService)

Navigation and Route Protection

Component Communication and State Management

RouterLink and RouterOutlet

```bash
route-guards-demo/
│
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.guard.ts
│   │   │   ├── admin.guard.ts
│   │   │   ├── unsaved-changes.guard.ts
│   │   ├── login/
│   │   │   ├── login.component.ts
│   │   │   ├── login.component.html
│   │   ├── dashboard/
│   │   │   ├── dashboard.component.ts
│   │   │   ├── dashboard.component.html
│   │   ├── admin/
│   │   │   ├── admin.component.ts
│   │   │   ├── admin.component.html
│   │   ├── profile/
│   │   │   ├── profile.component.ts
│   │   │   ├── profile.component.html
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│
├── package.json
└── angular.json


🧩 Key Files and Responsibilities
File	Description
auth.service.ts	Handles mock login/logout and role management
auth.guard.ts	Blocks unauthenticated users from protected routes
admin.guard.ts	Allows only admin role users to access admin routes
unsaved-changes.guard.ts	Prompts before leaving unsaved form
login.component.ts	Handles mock user/admin login
dashboard.component.ts	Accessible by authenticated users
admin.component.ts	Accessible only by admins
profile.component.ts	Demonstrates CanDeactivate guard usage
app-routing.module.ts	Defines all routes and attaches guards
⚙️ Installation & Setup
1️⃣ Create project
ng new route-guards-demo
cd route-guards-demo

2️⃣ Generate Components
ng generate component login
ng generate component dashboard
ng generate component admin
ng generate component profile

3️⃣ Generate Guards & Service
ng generate service auth/auth
ng generate guard auth/auth
ng generate guard auth/admin
ng generate guard auth/unsaved-changes

4️⃣ Serve the Application
ng serve --open


App runs at 👉 http://localhost:4200

🧭 Routing Configuration
Route	Component	Guards Applied
/login	LoginComponent	None
/dashboard	DashboardComponent	AuthGuard
/admin	AdminComponent	AuthGuard, AdminGuard
/profile	ProfileComponent	UnsavedChangesGuard
💬 Interview Explanation Points

1. What are Route Guards in Angular?
They are interfaces that decide if navigation should be allowed or prevented. Common ones:

CanActivate – control access to a route

CanDeactivate – confirm navigation away from a route

CanLoad – control module loading

CanActivateChild – protect child routes

2. Real-Time Use Cases:

Preventing unauthorized users from accessing routes.

Warning users before leaving unsaved forms.

Restricting admin features.

Lazy-loading security.

3. How I implemented it:

Created AuthService to manage mock login and roles.

AuthGuard checks authentication.

AdminGuard ensures role is ‘admin’.

UnsavedChangesGuard checks if the form has unsaved data.

Routes are connected through app-routing.module.ts.

🧑‍💻 Example Flow

User opens /login and logs in as either user or admin.

After login → navigates to Dashboard (protected by AuthGuard).

If the user tries to open Admin route:

Only accessible if logged in as admin.

On the Profile page:

Typing in form marks unsaved state.

Leaving page triggers confirmation prompt.

🧱 Technologies Used

Angular 8

TypeScript

Bootstrap 4 (UI styling)

RxJS (for async behavior if extended)

🏁 Outcome

You can confidently explain:

How route guards enhance application security and UX.

The flow of authentication and authorization in Angular.

How to handle unsaved data and restricted access scenarios.

📚 Bonus: Talking Points for Interview

Difference between CanActivate and CanLoad

Guard execution order

Guards with lazy-loaded modules

Reusability and scalability in enterprise apps