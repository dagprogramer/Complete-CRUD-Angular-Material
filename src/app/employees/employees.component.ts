import { Component, OnInit } from '@angular/core';
import {EmployeeServiceComponent} from '../shared/employee-service/employee-service.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
