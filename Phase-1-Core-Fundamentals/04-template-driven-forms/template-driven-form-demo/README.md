🎯 Objective

The goal of this project is to build a User Registration Form using Angular Template-Driven Forms, highlighting:

Two-way data binding using ngModel

Built-in and custom form validations

Real-time validation feedback

Form submission and reset functionality

Dynamic form control states

🛠️ Tech Stack
Tool	Version	Purpose
Angular	8.x	Frontend framework
TypeScript	3.x	Language support
Bootstrap	4.x	UI styling
Node.js	≥10.x	Runtime for Angular CLI

📂 Project Structure
```bash
template-driven-form-demo/
│
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.module.ts
│   │   └── user-form/
│   │        ├── user-form.component.ts
│   │        ├── user-form.component.html
│   │        └── user-form.component.css
│   ├── index.html
│   └── styles.css
│
├── angular.json
├── package.json
└── README.md

🚀 Setup Instructions
Step 1: Clone Repository
git clone https://github.com/yourusername/template-driven-form-demo.git
cd template-driven-form-demo

Step 2: Install Dependencies
npm install

Step 3: Run Application
ng serve --open


Application will open in your browser at:
👉 http://localhost:4200

💡 Features

✅ Template-Driven Form using NgForm
✅ Two-way data binding with [(ngModel)]
✅ Built-in validations (required, minlength, email)
✅ Real-time validation messages
✅ Form submission with JSON output
✅ Reset functionality
✅ Simple Bootstrap-based responsive UI

🧱 Core Component: UserFormComponent
user-form.component.html
<div class="card shadow p-4">
  <h3 class="text-center text-primary mb-4">User Registration Form</h3>

  <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
    <div class="form-group">
      <label>Full Name</label>
      <input type="text"
             name="fullName"
             class="form-control"
             [(ngModel)]="user.fullName"
             required
             minlength="3"
             #fullName="ngModel">
      <small class="text-danger" *ngIf="fullName.invalid && fullName.touched">
        Name is required (min 3 characters)
      </small>
    </div>

    <div class="form-group mt-3">
      <label>Email</label>
      <input type="email"
             name="email"
             class="form-control"
             [(ngModel)]="user.email"
             required
             email
             #email="ngModel">
      <small class="text-danger" *ngIf="email.invalid && email.touched">
        Enter a valid email address
      </small>
    </div>

    <div class="form-group mt-3">
      <label>Gender</label><br>
      <label><input type="radio" name="gender" value="Male" [(ngModel)]="user.gender" required> Male</label>
      <label class="ml-3"><input type="radio" name="gender" value="Female" [(ngModel)]="user.gender" required> Female</label>
      <div *ngIf="userForm.submitted && !user.gender" class="text-danger">
        Gender is required
      </div>
    </div>

    <div class="form-group mt-3">
      <label>Country</label>
      <select name="country"
              class="form-control"
              [(ngModel)]="user.country"
              required>
        <option value="" disabled>Select Country</option>
        <option *ngFor="let c of countries">{{ c }}</option>
      </select>
      <small class="text-danger" *ngIf="!user.country && userForm.submitted">
        Please select a country
      </small>
    </div>

    <div class="text-center mt-4">
      <button type="submit" class="btn btn-primary" [disabled]="!userForm.valid">Submit</button>
      <button type="button" class="btn btn-secondary ml-2" (click)="onReset(userForm)">Reset</button>
    </div>
  </form>

  <div *ngIf="submitted" class="alert alert-success mt-4">
    <h5>✅ Form Submitted Successfully!</h5>
    <pre>{{ user | json }}</pre>
  </div>
</div>

🧠 Key Angular Concepts Covered

FormsModule usage for template-driven forms

[(ngModel)] two-way data binding

Template reference variable (#userForm="ngForm")

Accessing form control states (touched, dirty, valid)

Conditional validation error messages

Handling submit and reset events

Using *ngIf for dynamic content rendering

🧩 Interview Questions to Prepare
Topic	Example Question
Template vs Reactive Forms	What’s the difference between template-driven and reactive forms?
Validation	How do you implement custom validation in a template-driven form?
Form State	How can you check if a control is valid, touched, or dirty?
ngModel	How does two-way binding work in template-driven forms?
Best Practices	When should you prefer reactive forms over template-driven?
🧪 Output Preview

✅ Responsive registration form
✅ Real-time validation feedback
✅ JSON output after submission
✅ Clean Bootstrap UI

🧰 Commands Summary
Command	Description
ng serve --open	Run the development server
ng build	Build the app for production
ng lint	Run lint checks
ng test	Run unit tests
📜 License

This project is open-source and free for educational or interview preparation purposes.

👨‍💻 Author

Sumit Kumar Choudhary
SRE & DevOps Lead | Cloud & Full Stack Architect
Experienced in Angular, React, Spring Boot, and Generative AI