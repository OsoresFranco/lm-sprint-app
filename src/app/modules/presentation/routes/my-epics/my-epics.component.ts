import { Component } from '@angular/core';
import { Epics } from 'src/app/modules/core/models/Epics';

@Component({
	selector: 'app-my-epics',
	templateUrl: './my-epics.component.html',
	styleUrls: ['./my-epics.component.scss'],
})
export class MyEpicsComponent {
	title: string = 'Epics';

	epics: Epics[] = [];
}
