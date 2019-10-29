/* tslint:disable:no-string-literal */
import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public matSnackBar: MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  success(msg) {
    this.config['panelClass'] = ['notification', 'success'];
    this.matSnackBar.open(msg, '', this.config);
  }
}
