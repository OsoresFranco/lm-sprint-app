import { MaterialModule } from './../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LabelComponent } from './components/label/label.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
	declarations: [
	LabelComponent,
	NavbarComponent,
	CardComponent],
	imports: [
		CommonModule,
		FlexLayoutModule,
	],
	exports: [
		FlexLayoutModule,
	]
})
export class PresentationModule {
}
