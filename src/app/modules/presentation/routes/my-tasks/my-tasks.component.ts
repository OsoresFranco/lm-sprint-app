import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tasks } from 'src/app/modules/core/models/Tasks';
import { DialogFormComponent } from '../../components/dialog-form/dialog-form.component';
import Swal from 'sweetalert2';
import { TaskService } from 'src/app/modules/api-rest/services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-my-tasks',
	templateUrl: './my-tasks.component.html',
	styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit, OnDestroy {
	subscription: Subscription;
	urlId: number;
	tasks: Tasks[] = [];

	constructor(
		public dialog: MatDialog,
		private taskService: TaskService,
		private route: ActivatedRoute
	) {}

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
				this.taskService.taskDelete(event).subscribe({
					next: (response) => {
						console.log(response);
					},
					error: (error) => {
						console.log(
							'There was an error with the connection: ' +
								error.message
						);
					},
				});
			}
		});
	}

	getTasks() {
		this.taskService.tasks(this.urlId).subscribe({
			next: (response) => {
				this.tasks = response.data;
			},
			error: (error) => {
				console.log(
					'There was an error with the connection: ' + error.message
				);
			},
		});
	}

	ngOnInit(): void {
		this.urlId = this.route.snapshot.params.id;
		this.getTasks();
		this.subscription = this.taskService.refresh$.subscribe(() => {
			this.getTasks();
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
