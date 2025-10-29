🧩 Angular 8 RxJS Observables Mini Project — Live User Search
📘 Overview

This mini-project demonstrates the practical use of RxJS Observables in Angular 8 through a live user search feature.
It simulates real-time data fetching with reactive programming concepts like Subjects, Operators, and Subscription Management.

🎯 Project Objective

To showcase how Observables and RxJS operators can be used to:

Handle asynchronous data streams

Implement debounced live search

Manage subscriptions efficiently

Demonstrate a real-world RxJS use case in Angular

🏗️ Project Structure
```bash
rxjs-observables-demo/
│
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── user.service.ts
│   │   ├── components/
│   │   │   └── user-search/
│   │   │       ├── user-search.component.ts
│   │   │       ├── user-search.component.html
│   │   │       └── user-search.component.css
│   │   ├── app.module.ts
│   │   └── app.component.html
│   ├── index.html
│   └── main.ts
└── package.json

⚙️ Tech Stack
Category	Technology
Frontend Framework	Angular 8
Reactive Library	RxJS
Styling	Bootstrap
Language	TypeScript
Tools Used	Angular CLI, Visual Studio Code
🧠 Key Features

✅ Live Search — Fetches user data dynamically based on input
✅ Debouncing — Avoids unnecessary API calls using debounceTime
✅ SwitchMap Operator — Cancels previous requests when a new query is entered
✅ Subscription Cleanup — Properly unsubscribes using takeUntil to prevent memory leaks
✅ Mock API Integration — Simulates server delay using RxJS of() and delay()

🧩 Core Components
1️⃣ UserService

Contains mock user data.

Filters data based on search query.

Returns an Observable to simulate asynchronous API calls.

2️⃣ UserSearchComponent

Handles user input and emits search queries using Subject.

Subscribes to observable stream to get search results.

Uses RxJS operators:

debounceTime(400) — Waits before triggering search.

distinctUntilChanged() — Avoids duplicate queries.

switchMap() — Cancels ongoing API calls for new input.

takeUntil() — Cleans up subscription on component destroy.

💡 Implementation Flow
User Types → Emits Event (Subject)
         ↓
Debounce & Distinct Check (RxJS Operators)
         ↓
API Call via UserService (Observable)
         ↓
Subscribe → Display Filtered Results

🧩 Important RxJS Concepts Used
Concept	Description
Observable	Represents data streams like API responses
Observer	Consumes emitted values
Subject	Acts as both Observable and Observer (used for emitting search queries)
Operators	Functions to transform/filter streams
Subscription	Connects observer to observable
Unsubscription	Ensures cleanup to prevent memory leaks
🧩 Example Operators Used
Operator	Purpose
debounceTime(400)	Delays execution to avoid rapid API calls
distinctUntilChanged()	Ignores consecutive duplicate inputs
switchMap()	Cancels previous HTTP requests on new input
takeUntil()	Unsubscribes when component is destroyed
delay(500)	Simulates API response time in mock service
🖼️ UI Output

Search box for typing user name.

Dynamic results update with debounce delay.

“No users found” message when no matches.

🧱 Best Practices Demonstrated

Reactive programming with RxJS

Memory leak prevention (takeUntil)

Separation of concerns (Service vs Component)

Clean and modular Angular structure

Scalable for real API integration

🚀 How to Run
```bash
npm install
ng serve


Open browser at: http://localhost:4200

🧩 Possible Enhancements

Integrate with real REST API using HttpClient.

Add error handling using catchError.

Display loading spinner using tap.

Implement combineLatest for filtering + searching.

💬 How to Explain in Interview

“This project demonstrates my understanding of RxJS in Angular.
I used a Subject to emit user inputs and applied operators like debounceTime, distinctUntilChanged, and switchMap to handle live search efficiently.
I also implemented proper unsubscription using takeUntil to avoid memory leaks.
This pattern is useful in real-time applications like autocomplete, search suggestions, and live dashboards.”