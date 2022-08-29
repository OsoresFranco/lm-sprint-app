import { Component, Input, OnInit, SimpleChange, OnChanges } from '@angular/core';

@Component({
	selector: 'app-progress-spinner',
	templateUrl: './progress-spinner.component.html',
	styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent implements OnInit {
	@Input() loading: boolean = false;
	@Input() httploading: boolean = false;

	ngOnChanges(changes: SimpleChange) {
		console.log(changes); //logging the changes in @Input()
	}

	constructor() {}

	ngOnInit(): void {}
}
