import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    { id: 1, name: 'Sumit', role: 'SRE' },
    { id: 2, name: 'Riya', role: 'Developer' },
    { id: 3, name: 'Raj', role: 'Tester' }
  ];

  getEmployees() {
    return this.employees;
  }

  addEmployee(emp: { id: number, name: string, role: string }) {
    this.employees.push(emp);
  }
}
