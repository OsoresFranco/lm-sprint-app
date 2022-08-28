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

@NgModule({
	declarations: [
		LabelComponent,
		CardComponent,
		PageHeaderTitleComponent,
		HomeComponent,
		NavbarComponent,
	],
	imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule],
	exports: [FlexLayoutModule],
})
export class PresentationModule {}
