import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/modules/api-rest/services/project.service';
import { Projects } from 'src/app/modules/core/models/Projects';

@Component({
	selector: 'app-my-projects',
	templateUrl: './my-projects.component.html',
	styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent implements OnInit {
	title: string = 'My Projects';
	cards: Projects[] = [];

	constructor(private projectService: ProjectService) {}

	ngOnInit(): void {
		this.projectService.projects().subscribe({
			next: (response) => {
				this.cards = response.data;
			},
			error: (error) => {
				alert('There was an error on the connection! ' + error.message);
			},
		});
	}
}
