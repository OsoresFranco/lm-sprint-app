import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/modules/api-rest/services/task.service';
import { Tasks } from 'src/app/modules/core/models/Tasks';

@Component({
	selector: 'app-task-card',
	templateUrl: './task-card.component.html',
	styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
	@Output() delete = new EventEmitter();
	checked: boolean;

	@Input() task: Tasks;
	isChecked: boolean;

	check(task: Tasks) {
		this.checked = !this.checked;
		task = {
			...task,
			done: this.checked,
		};
		this.taskService.taskEdit(task).subscribe({
			next: (response) => {
				console.log(response);
			},
		});
	}

	deleteEmit(event: Tasks) {
		this.delete.emit(event);
	}

	constructor(private taskService: TaskService) {}

	ngOnInit(): void {
		if (this.task.done === true) {
			this.isChecked = true;
			this.checked = true;
		} else {
			this.isChecked = false;
		}
	}
}
