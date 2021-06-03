import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private matSnackBar: MatSnackBar) {}

  public openSnackBar(message: string, duration: number) {
    const snackBarConfig: MatSnackBarConfig = new MatSnackBarConfig();
    // type MatSnackBarHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';
    snackBarConfig.horizontalPosition = 'center';
    // type MatSnackBarVerticalPosition = 'top' | 'bottom';
    snackBarConfig.verticalPosition = 'bottom';
    snackBarConfig.panelClass = 'snack-bar';
    snackBarConfig.duration = duration;

    this.matSnackBar.open(message, '', snackBarConfig);
  }
}
