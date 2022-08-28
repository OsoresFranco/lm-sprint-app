import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LabelComponent } from './components/label/label.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
	declarations: [LabelComponent, CardComponent],
	imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule],
	exports: [FlexLayoutModule],
})
export class PresentationModule {}
