🧩 Angular 8 Routing & Child Routes Mini Project
🧠 Objective

This mini project demonstrates how to implement Angular Routing with Child Routes, enabling modular navigation, nested components, and dynamic route parameters.
It’s designed to showcase your understanding of Angular Router, route configuration, and component hierarchy — essential topics for interviews.

🏗️ Project Structure

```bash
angular-child-routing/
│
├── src/
│   ├── app/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts / .html
│   │   ├── app.module.ts
│   │   ├── home/
│   │   │   ├── home.component.ts / .html
│   │   ├── products/
│   │   │   ├── products.component.ts / .html
│   │   │   ├── product-list/
│   │   │   │   ├── product-list.component.ts / .html
│   │   │   ├── product-detail/
│   │   │   │   ├── product-detail.component.ts / .html
│   │   ├── about/
│   │   │   ├── about.component.ts / .html
│   ├── main.ts
│   ├── index.html

⚙️ Setup & Run Commands

# Create new Angular 8 project
ng new angular-child-routing
cd angular-child-routing

# Create components
ng generate component home
ng generate component products
ng generate component products/product-list
ng generate component products/product-detail
ng generate component about

# Run the application
ng serve --open

🧩 Routing Configuration (app-routing.module.ts)

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'products', 
    component: ProductsComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductDetailComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/home' }
];

✅ Key Points to Explain:

Default route (redirectTo)

Nested child routes inside /products

Dynamic route parameter (:id)

Wildcard route handling


🧭 Router Navigation Example (app.component.html)
```html
<nav>
  <a routerLink="/home">Home</a> |
  <a routerLink="/products">Products</a> |
  <a routerLink="/about">About</a>
</nav>

<router-outlet></router-outlet>

✅ Interview Tip:
### Explain that <router-outlet> acts as a placeholder for rendering the matched component based on the current URL

<h2>Products Section</h2>
<nav>
  <a routerLink="./">Product List</a> | 
  <a routerLink="101">Product Details (Example)</a>
</nav>
<hr>
<router-outlet></router-outlet>


🧾 product-list.component.ts

productId: number;

ngOnInit() {
  this.productId = +this.route.snapshot.paramMap.get('id');
}

📘 product-detail.component.ts
productId: number;

ngOnInit() {
  this.productId = +this.route.snapshot.paramMap.get('id');
}

🎨 Styling (Optional)

nav a {
  margin: 0 10px;
  text-decoration: none;
}
a.active {
  font-weight: bold;
}

💡 Concepts Demonstrated
Concept	Description
RouterModule	For configuring and importing routes
Nested Routes	Child routes defined inside a parent route
Dynamic Route Params	Using :id and ActivatedRoute
Router Navigation	[routerLink] and <router-outlet>
Default & Wildcard Routes	Handles fallback paths gracefully

🗣️ Interview Talking Points

✅ Explain how child routes help modularize feature areas (e.g., /products → list, details).
✅ Discuss ActivatedRoute for reading route parameters.
✅ Emphasize relative navigation (../ vs absolute /path).
✅ Mention lazy loading modules can use the same pattern in large apps.
✅ Highlight real-world use case: Admin → Dashboard, Users, Reports as nested routes.

🧠 Key Learning Outcome

Demonstrates how to structure route hierarchy, handle navigation, and use router parameters effectively in Angular 8 — one of the most asked concepts for 3+ years experience interviews.