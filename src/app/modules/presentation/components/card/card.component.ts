import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Epics } from 'src/app/modules/core/models/Epics';
import { Projects } from 'src/app/modules/core/models/Projects';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

const cardType = {
	project: ['card__container--project'],
	epic: ['card__container--epic'],
};

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	constructor(public dialog: MatDialog, private router:Router) {}

	@Input() set cardType(value: keyof typeof cardType) {
		this._cardType = (cardType[value] || []).join(' ');
	}
	_cardType = 'card__container--project';

	@Input() card: Projects | Epics;

	@Input() dialogButton: boolean = true;

	openDialog(cardInfo: Projects | Epics) {
		this.dialog.open(CardDialogComponent, {
			data: cardInfo,
			maxWidth: '90',
		});
	}

	navigateTo(id:string | number){
		this.router.navigate(['/my-projects', id]);
	}

	ngOnInit(): void {}
}
