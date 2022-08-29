import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Epics } from 'src/app/modules/core/models/Epics';
import { Projects } from 'src/app/modules/core/models/Projects';

@Component({
	selector: 'app-card-dialog',
	templateUrl: './card-dialog.component.html',
	styleUrls: ['./card-dialog.component.scss'],
})
export class CardDialogComponent implements OnInit {
	constructor(@Inject(MAT_DIALOG_DATA) public data: Epics | Projects) {}

	epics: Epics[] = [
		{
			_id: 'asdmkasjdkasd',
			id: 5,
			project: 'Proyecto #1',
			name: 'Epic 1',
			description:
				'Este es la descripcion de mi epica y es muy larga para solo ocupar una linea',
			icon: '❤️‍🔥',
			__v: 2,
		},
		{
			_id: 'asdmkasjdkasd',
			id: 5,
			project: 'Epic 2',
			name: 'Epic 2',
			description:
				'Este es la descripcion de mi epica y es muy larga para solo ocupar una linea',
			icon: '❤️‍🔥',
			__v: 2,
		},
		{
			_id: 'asdmkasjdkasd',
			id: 5,
			project: 'Epic 3',
			name: 'Epic 3',
			description:
				'Este es la descripcion de mi epica y es muy larga para solo ocupar una linea',
			icon: '❤️‍🔥',
			__v: 2,
		},
		{
			_id: 'asdmkasjdkasd',
			id: 5,
			project: 'Epic 4',
			name: 'Epic 4',
			description:
				'Este es la descripcion de mi epica y es muy larga para solo ocupar una linea',
			icon: '',
			__v: 2,
		},
		{
			_id: 'asdmkasjdkasd',
			id: 5,
			project: 'Epic 5',
			name: 'Epic 5',
			description:
				'Este es la descripcion de mi epica y es muy larga para solo ocupar una linea',
			icon: '❤️‍🔥',
			__v: 2,
		},
		{
			_id: 'asdmkasjdkasd',
			id: 5,
			project: 'Epic 6',
			name: 'Hacer algo en mi epic',
			description:
				'Este es la descripcion de mi epica y es muy larga para solo ocupar una linea',
			icon: '❤️‍🔥',
			__v: 2,
		},
		{
			_id: 'asdmkasjdkasd',
			id: 5,
			project: 'Epic 7',
			name: 'Hacer algo en mi epic',
			description:
				'Este es la descripcion de mi epica y es muy larga para solo ocupar una linea',
			icon: '',
			__v: 2,
		},
		{
			_id: 'asdmkasjdkasd',
			id: 5,
			project: 'Epic 8',
			name: 'Hacer algo en mi epic',
			description:
				'Este es la descripcion de mi epica y es muy larga para solo ocupar una linea',
			icon: '❤️‍🔥',
			__v: 2,
		},
		{
			_id: 'asdmkasjdkasd',
			id: 5,
			project: 'Epic 9',
			name: 'Hacer algo en mi epic',
			description:
				'Este es la descripcion de mi epica y es muy larga para solo ocupar una linea',
			icon: '',
			__v: 2,
		},
	];

	ngOnInit(): void {}
}
