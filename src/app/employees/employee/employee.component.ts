import { Component, OnInit } from '@angular/core';
import {EmployeeServiceComponent} from '../../shared/employee-service/employee-service.component';
import {DepartmentService} from '../../shared/department.service';
import {NotificationService} from '../../shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeServiceComponent,
              private departmentService: DepartmentService,
              private notificacionService: NotificationService) { }

  departments = [
    {id: 2, value: 'Dpto1'},
    {id: 3, value: 'Dpto2'},
    {id: 4, value: 'Dpto3'}
  ];

  ngOnInit() {
    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.initialiarFormGroup();
    this.notificacionService.success(':: Submited Successfully');
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initialiarFormGroup();
    }
  }

}
