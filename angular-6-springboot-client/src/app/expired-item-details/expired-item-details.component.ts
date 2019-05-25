import { Employee } from './../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './expired-item-details.component.html',
  styleUrls: ['./expired-item-details.component.css']
})
export class ExpiredItemDetailsComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

}
