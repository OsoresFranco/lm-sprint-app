import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Epics } from 'src/app/modules/core/models/Epics';

@Component({
	selector: 'app-my-epics',
	templateUrl: './my-epics.component.html',
	styleUrls: ['./my-epics.component.scss'],
})
export class MyEpicsComponent implements OnInit {
	url: string;
	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.url = this.route.snapshot.url.join('/');
	}

	title: string = 'Epics';

	epics: Epics[] = [
		{
			_id: '1',
			id: 1,
			project: 'Este es mi proyecto',
			name: 'Esta es una epica',
			description: 'Esta es una epica con un parrafo bastante largo',
			icon: '🏖',
			__v: 14,
		},
		{
			_id: '1',
			id: 2,
			project: 'string',
			name: 'string',
			description: 'string',
			icon: '🏖',
			__v: 14,
		},
		{
			_id: '1',
			id: 3,
			project: 'string',
			name: 'string',
			description: 'string',
			icon: 'string',
			__v: 14,
		},
		{
			_id: '1',
			id: 4,
			project: 'string',
			name: 'string',
			description: 'string',
			icon: 'string',
			__v: 14,
		},
	];
}
