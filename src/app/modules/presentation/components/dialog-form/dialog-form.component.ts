import { Component, Inject, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from 'src/app/modules/api-rest/services/story.service';
import { TaskService } from 'src/app/modules/api-rest/services/task.service';

@Component({
	selector: 'app-dialog-form',
	templateUrl: './dialog-form.component.html',
	styleUrls: ['./dialog-form.component.scss'],
})
export class DialogFormComponent implements OnInit {
	storiesInfo: string;
	usId: number;
	form: FormGroup;

	submit() {
		this.taskService.taskPost(this.form.value).subscribe({
			next: () => {},
			error: (error) => {
				console.log(
					'There was an error with this request: ' + error.message
				);
			},
		});
	}

	constructor(
		@Inject(MAT_DIALOG_DATA) public data,
		private fb: FormBuilder,
		private storyService: StoryService,
		private taskService: TaskService
	) {}

	ngOnInit(): void {
		this.usId = this.data.epicId;
		this.storyService.storyById(this.usId).subscribe({
			next: (response) => {
				this.storiesInfo = response.data[0]._id;
				this.form.patchValue({
					story: this.storiesInfo,
				});
			},
		});

		this.form = this.fb.group({
			name: new FormControl('', Validators.required),
			description: new FormControl('', Validators.minLength(10)),
			story: new FormControl(''),
		});
	}
}
