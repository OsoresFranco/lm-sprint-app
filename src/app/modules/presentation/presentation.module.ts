import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LabelComponent } from './components/label/label.component';
import { CardComponent } from './components/card/card.component';
import { PageHeaderTitleComponent } from './components/page-header-title/page-header-title.component';
import { HomeComponent } from './routes/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserProfileFooterComponent } from './components/user-profile-footer/user-profile-footer.component';
import { MyProjectsComponent } from './routes/my-projects/my-projects.component';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';

@NgModule({
	declarations: [
		LabelComponent,
		CardComponent,
		PageHeaderTitleComponent,
		HomeComponent,
		NavbarComponent,
		UserProfileFooterComponent,
		MyProjectsComponent,
		CardDialogComponent,
		ProgressSpinnerComponent,
	],
	imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule],
	exports: [FlexLayoutModule, NavbarComponent, ProgressSpinnerComponent],
})
export class PresentationModule {}
