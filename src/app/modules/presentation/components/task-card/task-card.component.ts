import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/modules/core/models/Tasks';

@Component({
	selector: 'app-task-card',
	templateUrl: './task-card.component.html',
	styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
	isChecked: boolean;

	check() {
		this.isChecked = !this.isChecked;
	}
  
	task: Tasks = {
		done: false,
		_id: '6253533cbaab600016e96399',
		id: 1,
		name: 'Task 1',
		description: 'This is task #1',
		story: '620192ba5d34515ecc3adafa',
		created: '2022-04-10T21:59:24.063Z',
		due: '2022-02-07T21:44:50.568Z',
		__v: 0,
	};

	constructor() {}

	ngOnInit(): void {}
}
