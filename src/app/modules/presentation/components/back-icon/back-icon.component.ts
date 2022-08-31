import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-back-icon',
	templateUrl: './back-icon.component.html',
	styleUrls: ['./back-icon.component.scss'],
})
export class BackIconComponent implements OnInit {
	route: boolean = true;

	constructor(public location: Location, private router: Router) {
		router.events.subscribe((val: any) => {
			if (val.url === '/') {
				this.route = false;
			} else {
				this.route = true;
			}
		});
	}

	goBack(): void {
		this.location.back();
	}

	ngOnInit(): void {}
}
