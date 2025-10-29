🧾 README.md — Angular 8 Route Resolver Mini Project
📘 Project Title:

User Profile Resolver App (Angular 8)

🎯 Objective:

This project demonstrates how to use Angular Route Resolvers to fetch data before a route is activated, ensuring that the target component has all required data ready when it loads.

It’s a common real-world pattern used in production to avoid loading spinners and provide a better user experience.

🧩 Key Concepts Covered:

Angular Routing and Navigation

Route Resolver (Resolve interface)

Using ActivatedRoute to access resolved data

Mock HTTP data fetching using RxJS Observable

Separation of concerns (Service + Resolver + Components)

Clean UI with Bootstrap integration

⚙️ Tech Stack:

Frontend: Angular 8

Language: TypeScript

UI: Bootstrap 4

Concepts: Routing, Observables, Dependency Injection, Resolver, Navigation

📁 Project Folder Structure
```bash
src/
├── app/
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   ├── app.component.html
│   ├── models/
│   │   └── user.model.ts
│   ├── services/
│   │   └── user.service.ts
│   ├── resolvers/
│   │   └── user.resolver.ts
│   ├── components/
│   │   ├── user-list/
│   │   │   ├── user-list.component.ts
│   │   │   ├── user-list.component.html
│   │   │   └── user-list.component.css
│   │   └── user-detail/
│   │       ├── user-detail.component.ts
│   │       ├── user-detail.component.html
│   │       └── user-detail.component.css

🚀 Project Setup & Run
# 1. Create a new Angular 8 app
ng new route-resolver-demo
cd route-resolver-demo

# 2. Generate components, service, and resolver
ng g c components/user-list
ng g c components/user-detail
ng g s services/user
ng g class resolvers/user-resolver --type=resolver

# 3. Copy the provided code files
# 4. Run the app
ng serve -o

🧠 How It Works

When the user navigates to /users/:id, Angular looks for a resolver in the route configuration.

The UserResolver calls the service method (getUserById) before route activation.

Once data is fetched, the route activates and passes the data to the UserDetailComponent via:

this.user = this.route.snapshot.data['user'];


This ensures no empty state or loading delay inside the component.

📜 Example Flow

Navigate to /users → list of users shown.

Click “View Details” → /users/:id.

Resolver fetches user data first.

Component loads instantly with user details.

💡 Core Files Explained
File	Purpose
user.service.ts	Provides mock API data using RxJS Observable
user.resolver.ts	Fetches data before route activation
app-routing.module.ts	Configures routes and resolver mapping
user-list.component.ts	Displays all users with navigation links
user-detail.component.ts	Displays user details from resolver data
app.component.html	Holds navigation and router-outlet
🧭 Routing Configuration Example
const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  {
    path: 'users/:id',
    component: UserDetailComponent,
    resolve: { user: UserResolver }
  }
];

🧑‍💻 What You Can Explain in Interview:

Why use a resolver?
→ To preload data before route activation and improve UX.

Difference between Resolver and ngOnInit() fetching?
→ Resolver ensures data is available before navigation, whereas ngOnInit() fetches after component load.

How does Angular handle async operations in Resolver?
→ It waits for the resolver’s observable to complete before activating the route.

Can we handle errors in resolver?
→ Yes, by using RxJS catchError() and navigating to an error route.

When should we avoid using resolvers?
→ For non-critical data or frequently changing data where preloading isn’t necessary.

🧠 Interview Tip

👉 When explaining, emphasize why resolvers are better UX-wise (data ready before route loads) and that they’re useful in dashboard or details pages that depend on API data.

🌟 Outcome

After completing this project, you’ll understand:

Lifecycle of Angular route activation

How to integrate asynchronous data using resolvers

Clean separation between routing, data fetching, and UI rendering