import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Epics } from 'src/app/modules/core/models/Epics';
import { Projects } from 'src/app/modules/core/models/Projects';
import { Stories } from 'src/app/modules/core/models/Stories';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

const cardType = {
	project: ['card__container--project'],
	epic: ['card__container--epic'],
};

@Component({
	selector: 'app-user-stories-card',
	templateUrl: './user-stories-card.component.html',
	styleUrls: ['./user-stories-card.component.scss'],
})
export class UserStoriesCardComponent implements OnInit {
	constructor(
		public dialog: MatDialog,
		private router: Router,
		private route: ActivatedRoute
	) {}

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

	navigateTo(card: any) {}

	ngOnInit(): void {}

	userStory: Stories = {
		assignedTo: ['6261aa79e81ff6207410e690'],
		points: 4,
		status: 'todo',
		_id: '620192ba5d34515ecc3adafa',
		id: 45,
		name: 'Crear pagina landing',
		description:
			'Esta es la descripcion de la user story esta, pero debe ser muy larga y por eso se va a mas de dos lineas',
		epic: '62017253df85e917808d11f0',
		created: '2022-02-07T21:44:26.346Z',
		owner: 'No sé',
		__v: 456,
	};
}
