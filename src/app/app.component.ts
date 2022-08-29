import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

const DEFAULT_LANG = 'es-AR';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	isLoaded: boolean = false;
	ishttpLoaded: boolean = false;

	sectionTitle: string = '';

	subscribeToEmitter(event: string) {
		this.sectionTitle = event;
	}

	currentYear = new Date().getFullYear();

	constructor(translate: TranslateService, private route: Router) {
		translate.setDefaultLang(DEFAULT_LANG);
	}

	ngOnInit() {
		this.route.events.subscribe(
			(event) => {
				if (event instanceof NavigationStart) {
					this.isLoaded = true;
				} else if (event instanceof NavigationEnd) {
					this.isLoaded = false;
				}
			},
			(error) => {
				this.isLoaded = false;
				console.log(error);
			}
		);
	}
}
