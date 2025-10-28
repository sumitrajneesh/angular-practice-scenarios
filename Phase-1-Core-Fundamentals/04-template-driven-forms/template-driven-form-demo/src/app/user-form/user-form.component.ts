import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = {
    fullName: '',
    email: '',
    gender: '',
    country: ''
  };
  submitted = false;
  countries = ['India', 'USA', 'UK', 'Canada'];

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      console.log('Form Data:', this.user);
    }
  }

  onReset(form: NgForm) {
    form.resetForm();
    this.submitted = false;
  }
}
