🧩 Angular 8 Lazy Loading Mini Project
🎯 Objective

This project demonstrates Lazy Loading in Angular 8 — a core performance optimization technique that allows modules to be loaded on demand, reducing the initial bundle size and improving load time.

🏗️ Project Structure
```bash
angular-lazy-loading-demo/
│
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   │
│   │   ├── components/
│   │   │   └── home/
│   │   │       ├── home.component.ts
│   │   │       ├── home.component.html
│   │   │       └── home.component.css
│   │   │
│   │   ├── admin/
│   │   │   ├── admin.module.ts
│   │   │   └── admin.component.ts
│   │   │
│   │   ├── user/
│   │   │   ├── user.module.ts
│   │   │   └── user.component.ts
│   │   │
│   │   └── dashboard/
│   │       ├── dashboard.module.ts
│   │       └── dashboard.component.ts
│   │
│   ├── index.html
│   └── main.ts

⚙️ Technologies Used

Angular 8

TypeScript

HTML5 / CSS3

Angular Router

🚀 Setup & Run
# 1. Create new Angular 8 project
ng new angular-lazy-loading-demo --routing --style css
cd angular-lazy-loading-demo

# 2. Create components and modules
ng g c components/home
ng g m admin --flat=false
ng g c admin
ng g m user --flat=false
ng g c user
ng g m dashboard --flat=false
ng g c dashboard

# 3. Run the app
ng serve -o

🧭 Routing Overview

app-routing.module.ts

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '**', redirectTo: '' }
];


This defines lazy-loaded routes — each feature module (Admin, User, Dashboard) loads only when the route is visited.

🏠 Home Component
<h2>Welcome to Lazy Loading Demo</h2>
<p>Click the links below to load modules lazily:</p>

<nav>
  <a routerLink="/admin">Admin</a> |
  <a routerLink="/user">User</a> |
  <a routerLink="/dashboard">Dashboard</a>
</nav>

<router-outlet></router-outlet>

🔍 How Lazy Loading Works

Initial Load:

Only AppModule and HomeComponent are loaded initially.

On Navigation:

When a user visits /admin, Angular dynamically loads AdminModule.

Benefit:

Reduces initial bundle size.

Improves application startup time.

Helps in large enterprise applications by splitting code into manageable chunks.

🧠 Key Interview Talking Points
Concept	Explanation
Lazy Loading	Loads feature modules only when their route is activated.
Eager Loading	Loads all modules at startup (not performance-friendly for large apps).
loadChildren()	Used in route configuration to dynamically import a module.
RouterModule.forChild()	Defines child routes within a feature module.
Performance Impact	Decreases initial load time and improves user experience.
Best Practice	Use lazy loading for large modules like Admin, Reports, Dashboard, etc.
🧩 Example: Admin Module

admin.module.ts

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminComponent }])
  ]
})
export class AdminModule { }


admin.component.ts

@Component({
  selector: 'app-admin',
  template: `<h3>Admin Module Loaded Lazily!</h3>`
})
export class AdminComponent { }

🧪 Verification (Interview Tip)

Open Chrome DevTools → Network → Filter: "chunk"

➡ When you navigate to /admin, /user, or /dashboard,
you’ll see new .js chunks like:

admin-admin-module.js
user-user-module.js
dashboard-dashboard-module.js


✅ These confirm that lazy loading is working correctly.

🏁 Conclusion

This mini project showcases:

Modular Angular architecture

Efficient lazy loading setup

Performance-oriented route configuration

Clean structure for interview discussion or demo