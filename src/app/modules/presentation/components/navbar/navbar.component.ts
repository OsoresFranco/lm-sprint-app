import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	//This line defines title of the navigation on mobile view
	@Input() _title: string = 'Section Title';

	links = [
		{ link: '', text: 'Home' },
		{ link: 'my-projects', text: 'My Projects' },
		{ link: 'mystories', text: 'My Stories' },
		{ link: 'settings', text: 'Settings' },
	];

	constructor(private router: Router, public route: ActivatedRoute) {}

	ngOnInit(): void {}
}
