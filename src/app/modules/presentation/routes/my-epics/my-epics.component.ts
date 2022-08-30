import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpicService } from 'src/app/modules/api-rest/services/epic.service';
import { Epics } from 'src/app/modules/core/models/Epics';

@Component({
	selector: 'app-my-epics',
	templateUrl: './my-epics.component.html',
	styleUrls: ['./my-epics.component.scss'],
})
export class MyEpicsComponent implements OnInit {
	title: string = 'Epics';
	epics: Epics[] = [];
	urlId: number;
	constructor(
		private route: ActivatedRoute,
		private epicService: EpicService
	) {}

	ngOnInit(): void {
		this.urlId = this.route.snapshot.params.id;
		this.epicService.epic(this.urlId).subscribe({
			next: (res) => {
				this.epics = res.data;
			},
			error: (error) => {
				alert(
					'There was a problem with your request: ' + error.message
				);
			},
		});
	}
}
