import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root',
})
export class SnackbarService {
	constructor(private _snackBar: MatSnackBar) {}

	snackBarError(message: string, action: string) {
		this._snackBar.open(message, action, {
			panelClass: ['warn-snackbar'],
		});
	}

  snackBarSuccess(message: string, action: string) {
		this._snackBar.open(message, action, {
			panelClass: ['success-snackbar'],
		});
	}
}
