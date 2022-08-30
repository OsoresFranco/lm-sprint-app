import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	isLoaded: boolean = false;
	ishttpLoaded: boolean = false;

	sectionTitle: string = '';

	subscribeToEmitter(event: string) {
		this.sectionTitle = event;
	}

	currentYear = new Date().getFullYear();

	constructor(private route: Router) {}

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
