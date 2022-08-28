import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	exports: [
		MatSnackBarModule,
		MatToolbarModule,
		MatCardModule,
		MatSidenavModule,
		MatIconModule,
		MatDialogModule,
		MatButtonModule,
	],
})
export class MaterialModule {}
