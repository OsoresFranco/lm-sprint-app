import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/modules/core/models/Projects';

@Component({
	selector: 'app-my-projects',
	templateUrl: './my-projects.component.html',
	styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent implements OnInit {
	title:string = 'My Projects'
	cards: Projects[] = [
		{
			members: [],
			_id: 'hasuid767a8sd6a',
			id: 12,
			name: 'App Aeronautica 1',
			description:
				'App de rastreo aeronautico para el gobierno de la ciudad de Buenos Aires',
			icon: '🌎',
			__v: 14,
		},
		{
			members: [],
			_id: 'hasuid767a8sd6a',
			id: 12,
			name: 'App Aeronautica 2',
			description:
				'App de rastreo aeronautico para el gobierno de la ciudad de Buenos Aires',
			icon: '🌎',
			__v: 14,
		},
		{
			members: [],
			_id: 'hasuid767a8sd6a',
			id: 12,
			name: 'App Aeronautica 3',
			description:
				'App de rastreo aeronautico para el gobierno de la ciudad de Buenos Aires',
			icon: '🌎',
			__v: 14,
		},
		{
			members: [],
			_id: 'hasuid767a8sd6a',
			id: 12,
			name: 'A 4',
			description:
				'App de rastreo aeronautico para el gobierno de la ciudad de Buenos Aires',
			icon: '🌎',
			__v: 14,
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
