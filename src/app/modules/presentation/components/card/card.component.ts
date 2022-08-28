import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Epics } from 'src/app/modules/core/models/Epics';
import { Projects } from 'src/app/modules/core/models/Projects';

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
	constructor(public dialog: MatDialog) {}

	@Input() set cardType(value: keyof typeof cardType) {
		this._cardType = (cardType[value] || []).join(' ');
	}
	_cardType = 'card__container--project';

	/* 	@Input() card: Projects | Epics; */
	card: Projects = {
		members: [],
		_id: 'hasuid767a8sd6a',
		id: 12,
		name: 'App Aeronautica Estatal',
		description:
			'App de rastreo aeronautico para el gobierno de la ciudad de Buenos Aires',
		icon: '🌎',
		__v: 14,
	};

	@Input() dialogButton: boolean = true;

	/* 
	openDialog(cardInfo: Projects | Epics) {
		this.dialog.open(CardDialogComponent, {
			data: cardInfo,
			maxWidth: '90',
		});
	} */

	ngOnInit(): void {}
}
