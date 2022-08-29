import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Epics } from 'src/app/modules/core/models/Epics';

@Component({
	selector: 'app-my-epics',
	templateUrl: './my-epics.component.html',
	styleUrls: ['./my-epics.component.scss'],
})
export class MyEpicsComponent implements OnInit {
	urlId: string;
	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.urlId = this.route.snapshot.params.id;
		
	}

	title: string = 'Epics';

	epics: Epics[] = [];
}
