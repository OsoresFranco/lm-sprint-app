import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/modules/core/models/Tasks';

@Component({
	selector: 'app-my-tasks',
	templateUrl: './my-tasks.component.html',
	styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit {


	tasks: Tasks[] = [{
		done: false,
		_id: '6253533cbaab600016e96399',
		id: 1,
		name: 'Task 1',
		description: 'This is task #1',
		story: '620192ba5d34515ecc3adafa',
		created: '2022-04-10T21:59:24.063Z',
		due: '2022-02-07T21:44:50.568Z',
		__v: 0,
	},
	{
		done: false,
		_id: '6253533cbaab600016e96399',
		id: 1,
		name: 'Task 2',
		description: 'This is task #1',
		story: '620192ba5d34515ecc3adafa',
		created: '2022-04-10T21:59:24.063Z',
		due: '2022-02-07T21:44:50.568Z',
		__v: 0,
	}]
	constructor() {}

	ngOnInit(): void {}
}
