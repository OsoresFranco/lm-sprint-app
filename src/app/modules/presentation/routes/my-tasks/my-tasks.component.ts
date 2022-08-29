import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tasks } from 'src/app/modules/core/models/Tasks';
import { DialogFormComponent } from '../../components/dialog-form/dialog-form.component';

@Component({
	selector: 'app-my-tasks',
	templateUrl: './my-tasks.component.html',
	styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit {
	tasks: Tasks[] = [
		{
			done: false,
			_id: '630cf4375d621400168e0bf1',
			id: 143,
			name: 'Task 1',
			description: 'This is task #999',
			story: '620192ba5d34515ecc3adafa',
			created: '2022-08-29T17:15:35.396Z',
			due: '2022-08-29T17:15:35.396Z',
			__v: 0,
		},
	];
	constructor(public dialog: MatDialog) {}

	openDialog() {
		this.dialog.open(DialogFormComponent);
	}

	ngOnInit(): void {}
}
