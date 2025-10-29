🧾 README.md — Angular 8 HttpClient Interceptor Demo
📘 Project Title

Angular 8 HttpClient Interceptor Mini Project

🎯 Objective

To demonstrate how HttpClient Interceptors in Angular 8 can be used to:

Attach authentication tokens automatically to all HTTP requests

Show or hide a global loader during API calls

Handle API errors globally and efficiently

🧠 Key Learning / Interview Talking Points

You can use these bullet points to explain the project in interviews 👇

Implemented two interceptors:

AuthInterceptor → Attaches JWT Token in header

LoaderInterceptor → Controls global loading spinner

Used RxJS BehaviorSubject for global state management of loader visibility

Demonstrated Separation of Concerns by keeping services modular (ApiService, AuthService, LoaderService)

Integrated HttpClientModule for all REST API calls

Showed best practices — clean architecture, observables, and reusable services

Used Bootstrap Spinner for loader UI

API data fetched from JSONPlaceholder (fake REST API)

🏗️ Project Structure
```bash
http-interceptor-demo/
│
├── src/
│   ├── app/
│   │   ├── interceptors/
│   │   │   ├── auth.interceptor.ts        # Adds Authorization header
│   │   │   └── loader.interceptor.ts      # Shows/hides global loader
│   │   │
│   │   ├── services/
│   │   │   ├── api.service.ts             # Centralized API calls
│   │   │   ├── auth.service.ts            # Manages token
│   │   │   └── loader.service.ts          # Loader BehaviorSubject
│   │   │
│   │   ├── components/
│   │   │   └── posts/
│   │   │       ├── posts.component.ts     # Calls API & displays posts
│   │   │       └── posts.component.html
│   │   │
│   │   ├── app.component.ts               # Root component, shows loader
│   │   ├── app.component.html
│   │   └── app.module.ts                  # Declares interceptors globally
│   │
│   ├── index.html
│   └── main.ts
│
└── package.json

⚙️ Technologies Used
Technology	Purpose
Angular 8	Framework
TypeScript	Language
RxJS	Reactive programming, BehaviorSubject
Bootstrap 4	UI styling, spinner
JSONPlaceholder API	Fake backend for testing
🚀 How to Run the Project
# 1. Create Angular 8 Project
```bash
ng new http-interceptor-demo

# 2. Navigate into Project Folder
```bash
cd http-interceptor-demo

# 3. Add Components and Services
```bash
ng g c components/posts
ng g s services/api
ng g s services/auth
ng g s services/loader

# 4. Add Interceptors Folder
mkdir src/app/interceptors

# 5. Run the App
ng serve --open


Then visit: http://localhost:4200

🧩 Project Flow Explanation (to speak in interview)
🔹 Step 1: AuthInterceptor

Before each API request, this interceptor fetches a token from AuthService.

It clones the request and adds Authorization: Bearer <token> header.

🔹 Step 2: LoaderInterceptor

When a request starts → triggers loaderService.show()

When it completes → triggers loaderService.hide() using finalize() operator

The loader state is shared with AppComponent via RxJS BehaviorSubject.

🔹 Step 3: ApiService

Makes HTTP calls using HttpClient (e.g., GET posts).

The requests automatically pass through both interceptors.

🔹 Step 4: AppComponent

Subscribes to the loader observable and shows a global spinner overlay.

🔹 Step 5: PostsComponent

Calls ApiService.getPosts() and renders data in a simple list.

💡 Common Interview Questions You Can Expect
Question	How to Answer
What is an HttpInterceptor in Angular?	A class that can inspect and transform HTTP requests/responses globally. Implemented via the HttpInterceptor interface.
Why use multiple interceptors?	To handle cross-cutting concerns separately like auth, logging, loader, and error handling.
How do you show a global loader?	Using a BehaviorSubject in a LoaderService that the root component subscribes to.
How do you handle errors in HttpClient?	Using another HttpInterceptor or RxJS catchError operator.
What’s the difference between service and interceptor?	Services contain business logic; interceptors modify HTTP request/response streams.
🧱 Possible Enhancements

Add ErrorInterceptor for 401/404/500 handling

Implement retry logic using retryWhen() operator

Add centralized toast notifications for API errors

Use Angular Material Progress Spinner instead of Bootstrap spinner

✨ Output Preview

Loader spinner appears while fetching API

Posts displayed after successful response

All requests include Authorization token header

👨‍💻 Author

Sumit Kumar Choudhary
SRE | DevOps | Full Stack | Cloud | GenAI | Angular | Java
📍 Bengaluru, India