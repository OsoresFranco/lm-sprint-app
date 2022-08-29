import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tasks } from 'src/app/modules/core/models/Tasks';

@Component({
	selector: 'app-task-card',
	templateUrl: './task-card.component.html',
	styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
	@Output() delete = new EventEmitter();

	@Input() task: Tasks;
	isChecked: boolean;

	check() {
		this.isChecked = !this.isChecked;
	}

	deleteEmit(event: Tasks) {
		this.delete.emit(event);
	}

	constructor() {}

	ngOnInit(): void {}
}
