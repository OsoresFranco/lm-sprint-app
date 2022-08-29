import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tasks } from 'src/app/modules/core/models/Tasks';
import { DialogFormComponent } from '../../components/dialog-form/dialog-form.component';
import Swal from 'sweetalert2';

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

	deleteTask(event: Tasks) {
		Swal.fire({
			title: `Delete task ${event.name}?`,
			text: "You won't be able to revert this",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#12355b',
			cancelButtonColor: '#f1467c',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
			}
		});
	}

	ngOnInit(): void {}
}
