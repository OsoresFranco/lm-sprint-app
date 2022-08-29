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
	tasks: Tasks[] = [];
	constructor(public dialog: MatDialog) {}

	openDialog() {
		this.dialog.open(DialogFormComponent);
	}

	ngOnInit(): void {}
}
