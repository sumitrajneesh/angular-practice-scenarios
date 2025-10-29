import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private empService: EmployeeService, private logger: LoggerService) {}

  ngOnInit() {
    this.employees = this.empService.getEmployees();
    this.logger.log('Employee list loaded');
  }
}
