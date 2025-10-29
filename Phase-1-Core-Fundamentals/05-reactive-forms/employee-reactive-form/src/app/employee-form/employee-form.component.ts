import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      skills: this.fb.array([this.createSkill()])
    });
  }

  createSkill(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(1)]]
    });
  }

  get skills(): FormArray {
    return this.employeeForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.createSkill());
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log('Employee Data:', this.employeeForm.value);
      alert('Form Submitted Successfully!');
      this.employeeForm.reset();
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }
}
