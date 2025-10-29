🧩 Angular 8 Mini Project – Services & Dependency Injection (DI)
📘 Overview

This mini project demonstrates Angular Services and Dependency Injection (DI) concepts using a simple Employee Management System.
The project showcases how to:

Create and inject services in Angular.

Share data between multiple components using a common service.

Implement logging through a shared service.

Demonstrate the Singleton nature of Angular services.

🎯 Project Objective

To build a small Angular application where:

A user can add employees.

The employee list is shared between components using a common service.

A Logger service is used to track application actions.

🏗️ Project Structure
```bash
src/
├── app/
│   ├── employee.service.ts           # Handles employee data logic
│   ├── logger.service.ts             # Logs application activities
│   ├── employee-list/                # Component to display employee list
│   │   ├── employee-list.component.ts
│   │   ├── employee-list.component.html
│   ├── add-employee/                 # Component to add new employees
│   │   ├── add-employee.component.ts
│   │   ├── add-employee.component.html
│   ├── app.component.ts              # Root component
│   ├── app.component.html
│   ├── app.module.ts                 # Root module
│   └── app-routing.module.ts

⚙️ Key Features
Feature	Description
Employee Service	Manages employee data (CRUD operations).
Logger Service	Logs actions such as adding new employees.
Dependency Injection	Demonstrates how services are injected and shared.
Shared Data Between Components	Both components (AddEmployee and EmployeeList) use the same service instance.
Reusable Services	Follows best practice of separating logic from components.
🧠 Concepts Demonstrated
1. Angular Service

A service is a class that contains reusable business logic.
Example:
```bash
@Injectable({ providedIn: 'root' })
export class EmployeeService { ... }


providedIn: 'root' makes it a singleton service across the entire application.

2. Dependency Injection (DI)

Angular automatically injects dependencies (like services) into components that need them.
Example:

constructor(private empService: EmployeeService, private logger: LoggerService) {}

3. Shared State Using a Service

When both components use the same service instance, they share the same data.
This allows data consistency across components without parent-child communication.

4. Separation of Concerns

Components handle UI logic.

Services handle business logic.

LoggerService handles cross-cutting concerns (like logging).

💻 Workflow Diagram
```bash
AddEmployeeComponent  --->  EmployeeService  --->  EmployeeListComponent
         |                      ↑                        |
         |                      |                        |
         --------> LoggerService (Logs actions) <---------

🧪 Example Flow

User adds a new employee in AddEmployeeComponent.

Data gets stored in EmployeeService.

EmployeeListComponent automatically reflects the updated list.

LoggerService prints a log message to the console.

📦 Installation & Run
# Step 1: Create a new Angular project
```bash
ng new angular-services-di

# Step 2: Navigate into the project
```bash
cd angular-services-di

# Step 3: Generate components and services
```bash
ng g c employee-list
ng g c add-employee
ng g s employee
ng g s logger

# Step 4: Replace generated code with the provided implementation

# Step 5: Run the project
```bash
ng serve


Visit 👉 http://localhost:4200

📋 Interview Explanation Tips
Question	How to Explain
What is Dependency Injection?	A design pattern that allows components to receive dependencies (like services) instead of creating them manually. Angular’s injector manages these instances.
How does Angular handle services?	Services are singletons when provided in the root injector; Angular creates one instance and shares it.
How do components communicate using services?	Both components inject the same service instance; when one updates data, the other reflects the change automatically.
Why use services?	To maintain cleaner, reusable, and testable code by separating business logic from UI logic.
What is providedIn: 'root'?	It registers the service at the root level, ensuring a single shared instance across the entire app.
🧩 Technologies Used

Angular 8

TypeScript

HTML5 / CSS3

Bootstrap (optional for UI)

🏁 Output Preview

Add Employee Section

ID: 4
Name: John
Role: Developer
[Add]


Employee List Section

1 - Sumit (SRE)
2 - Riya (Developer)
3 - Raj (Tester)
4 - John (Developer)


Console Log

LoggerService: New Employee Added: John

🧱 Key Takeaways

✅ Demonstrates core Angular concepts: Services, DI, and Component Communication
✅ Emphasizes Separation of Concerns and Code Reusability
✅ Great mini project to explain interview-level understanding of Angular architecture