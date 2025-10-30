🌐 Angular 8 Global Error Handling Mini Project
🧭 Overview

This project demonstrates centralized error handling in Angular 8 using:

Global Error Handler (ErrorHandler)

HTTP Interceptor for API-level error management

Custom Logging Service

User-friendly alerts and fallback UI

It’s a perfect mini project for explaining how to manage runtime and HTTP errors in a clean, scalable way during interviews.

🏗️ Project Structure
```bash
error-handling-demo/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── user-list/
│   │   │       ├── user-list.component.ts
│   │   │       ├── user-list.component.html
│   │   │       └── user-list.component.css
│   │   ├── services/
│   │   │   ├── user.service.ts
│   │   │   └── error-logging.service.ts
│   │   ├── interceptors/
│   │   │   └── http-error.interceptor.ts
│   │   ├── handlers/
│   │   │   └── global-error.handler.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   └── index.html
└── angular.json

⚙️ Setup & Run
```bash
# Step 1: Create Angular 8 Project
ng new error-handling-demo
cd error-handling-demo

# Step 2: Create necessary components and services
ng g c components/user-list
ng g s services/user
ng g s services/error-logging

# Step 3: Manually create interceptor and handler folders
mkdir src/app/interceptors src/app/handlers

# Step 4: Add the code snippets as per implementation
# (UserService, HttpErrorInterceptor, GlobalErrorHandler)

# Step 5: Run the app
ng serve -o

🚀 Key Features
✅ 1. Global Error Handler

Handles all uncaught runtime exceptions in the app.

Implements Angular’s built-in ErrorHandler interface.

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private logger: ErrorLoggingService, private zone: NgZone) {}

  handleError(error: any): void {
    this.logger.logError(error);
    this.zone.run(() => {
      alert('An unexpected error occurred. Please try again later.');
    });
    console.error('GlobalErrorHandler:', error);
  }
}

✅ 2. HTTP Error Interceptor

Catches all API-level errors globally.

Differentiates between network errors and server-side errors.

Logs errors and displays alert messages.

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private logger: ErrorLoggingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = error.status === 0
          ? 'Network error. Please check your connection.'
          : `Error ${error.status}: ${error.message}`;
        this.logger.logError(error);
        alert(message);
        return throwError(error);
      })
    );
  }
}

✅ 3. Error Logging Service

Centralized location to log or send errors to an external system (e.g., Sentry, Datadog, Splunk).

@Injectable({ providedIn: 'root' })
export class ErrorLoggingService {
  logError(error: any) {
    console.error('Logging to server:', error);
  }
}

✅ 4. User List Component

Demonstrates normal and failed API calls to trigger errors.

this.userService.getInvalidEndpoint().subscribe();

🧠 Interview Explanation
💬 How to Explain

“In this project, I implemented a centralized error handling strategy for both runtime and HTTP errors.
For runtime issues, I used a custom GlobalErrorHandler which overrides Angular’s default error handler.
For API-level errors, I implemented an HTTP Interceptor that catches HttpErrorResponse objects globally.
All errors are passed to a logging service, which could send them to a remote monitoring system.
This approach separates error-handling logic from components and services, making the app cleaner and easier to maintain.”

🔑 Key Concepts to Highlight
Concept	Explanation
ErrorHandler	Base class for global runtime error handling.
HttpInterceptor	Middleware for all HTTP requests & responses.
catchError()	RxJS operator used to transform/catch errors.
Dependency Injection	Used to provide HttpClient, ErrorLoggingService.
NgZone	Ensures alerts or UI updates happen inside Angular’s zone.
🧩 Example Scenarios
Action	Result	Explanation
Load Users	Displays list	Successful API call
Trigger Error	Alert: Error 404: Not Found	HTTP Interceptor handles it
Throw runtime error	Alert: Unexpected error occurred	Global ErrorHandler handles it
🧪 Testing Steps

Run ng serve -o

Click Load Users → Should display list of users

Click Trigger Error → Should show alert + console log

Disconnect Internet → Test network error alert

🧱 Dependencies
Package	Purpose
@angular/common/http	Provides HttpClient
rxjs	Provides catchError operator
bootstrap (optional)	For styling UI
📘 Interview Talking Points

1️⃣ Why centralized error handling?
To avoid repeating try-catch logic in every service/component.

2️⃣ Difference between GlobalErrorHandler and Interceptor?

GlobalErrorHandler handles runtime errors (template or logic).

HttpInterceptor handles HTTP request/response errors.

3️⃣ How would you log to a remote server?
Use HttpClient in ErrorLoggingService to post the error to an API endpoint.

4️⃣ How to make user experience better during errors?
Show friendly toast messages, retry mechanisms, or fallback UIs.

5️⃣ How to test error handling?
Mock API failures, simulate offline mode, or throw deliberate exceptions.

🧩 Demo Screenshot (Optional)

(Add later when you run the project)
Example:

✅ Users loaded successfully

⚠️ Alert shown on error

🏁 Conclusion

This project demonstrates practical and production-grade error handling patterns in Angular 8 — covering runtime, HTTP, and logging concerns in a modular way.
It’s great to showcase your Angular architecture, RxJS, and clean code practices during interviews.