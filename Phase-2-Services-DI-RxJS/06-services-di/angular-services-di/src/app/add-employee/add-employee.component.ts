import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {
  id: number;
  name: string;
  role: string;

  constructor(private empService: EmployeeService, private logger: LoggerService) {}

  addEmployee() {
    if (this.id && this.name && this.role) {
      this.empService.addEmployee({ id: this.id, name: this.name, role: this.role });
      this.logger.log(`New Employee Added: ${this.name}`);
      this.id = null;
      this.name = '';
      this.role = '';
    }
  }
}
