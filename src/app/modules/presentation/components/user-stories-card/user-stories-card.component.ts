import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Epics } from 'src/app/modules/core/models/Epics';
import { Projects } from 'src/app/modules/core/models/Projects';
import { Stories } from 'src/app/modules/core/models/Stories';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

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

	@Input() userStory: Stories;

	openDialog(cardInfo: Projects | Epics) {
		this.dialog.open(CardDialogComponent, {
			data: cardInfo,
			maxWidth: '90',
		});
	}

	navigateTo(card: any) {
		this.router.navigate(['/my-tasks', card.id]);
	}

	ngOnInit(): void {}
}
