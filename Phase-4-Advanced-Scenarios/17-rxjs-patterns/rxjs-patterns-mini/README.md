⚡ RxJS Patterns Mini Project – Angular 8
🧭 Overview

This mini project demonstrates real-world RxJS patterns and reactive programming concepts in Angular 8.
The goal is to implement a live search dashboard that reacts instantly to user input while efficiently handling API calls using RxJS operators.

It’s a perfect example for explaining asynchronous data streams, subscription management, and clean unsubscription — all key topics for Angular interviews.

🏗️ Project Structure
```bash
rxjs-patterns-mini/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── search/
│   │   │       ├── search.component.ts
│   │   │       ├── search.component.html
│   │   │       └── search.component.css
│   │   ├── services/
│   │   │   └── user.service.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.module.ts
│   └── index.html
└── package.json

🎯 Objective

Implement a live search feature using RxJS.

Prevent unnecessary API calls using debounceTime() and distinctUntilChanged().

Manage concurrent API calls using switchMap().

Handle errors gracefully with catchError().

Ensure no memory leaks using takeUntil() and Subject.

⚙️ Technologies Used
Category	Tools/Tech
Framework	Angular 8
Language	TypeScript
Reactive Library	RxJS
HTTP Client	Angular HttpClient
API Source	GitHub Users API
Styling	Bootstrap / CSS
🧩 Key Files and Roles
1️⃣ search.component.ts

Implements the main reactive logic.

Uses a Subject to capture user input.

Applies RxJS operators for debounce, distinct search, and live updates.

RxJS Operators Used:

debounceTime(400) – wait for user to pause typing.

distinctUntilChanged() – ignore duplicate queries.

switchMap() – cancel previous API calls and take the latest.

tap() – side effect for loader and UI updates.

takeUntil() – clean up subscriptions on destroy.

2️⃣ user.service.ts

Handles API calls using Angular’s HttpClient.

Demonstrates catchError() and simulated network delay with delay().

Returns Observable<any> for full reactive integration.

3️⃣ app.component.html

Acts as the root shell:

<div class="container mt-5">
  <h1 class="text-center mb-4">⚡ RxJS Patterns Mini Project</h1>
  <app-search></app-search>
  <footer class="text-center mt-5 text-muted">
    <small>Built with ❤️ using Angular 8 and RxJS</small>
  </footer>
</div>

🔍 How It Works (Step-by-Step Explanation)

User types in the input field
→ Emits values to a Subject<string> (searchSubject).

Debounce + Distinct Until Changed
→ Prevents multiple API calls while typing quickly.

SwitchMap to API Call
→ Cancels older requests and fetches the latest search result.

Error Handling
→ Any API error is caught and displayed as a friendly message.

Unsubscription with takeUntil()
→ Ensures no memory leaks when component is destroyed.

💻 Run Locally
npm install
ng serve -o


The app opens automatically in your browser.

Try typing “sumit” or “john” in the search box to see GitHub user results appear dynamically.

🧠 Interview Talking Points

When interviewer asks:

“Explain what RxJS patterns you’ve implemented here?”

You can confidently say:

“I’ve used debounceTime to optimize API calls, distinctUntilChanged to ignore duplicate inputs, switchMap for handling rapid user input by cancelling previous HTTP requests, and takeUntil to manage clean unsubscriptions. This approach ensures performance optimization, no memory leaks, and smooth user experience.”

When asked:

“How did you manage API failures?”

Say:

“I used catchError() in the service layer to gracefully handle errors and return a fallback Observable, ensuring the UI doesn’t break.”

✅ Learning Outcome

Solid understanding of RxJS operators in real-world scenarios.

Ability to explain reactive programming flow clearly.

Confidence to discuss Angular component communication using Observables and Subjects.

Demonstrates professional code structure and best practices for Angular 8 projects.