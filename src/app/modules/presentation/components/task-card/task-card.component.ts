import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from 'src/app/modules/core/models/Tasks';

@Component({
	selector: 'app-task-card',
	templateUrl: './task-card.component.html',
	styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
	@Input() task:Tasks;
	isChecked: boolean;

	check() {
		this.isChecked = !this.isChecked;
	}
  

	constructor() {}

	ngOnInit(): void {}
}
