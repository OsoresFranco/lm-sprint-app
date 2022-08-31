import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { nextTick } from 'process';
import { AuthService } from 'src/app/modules/api-rest/services/auth.service';
import { UsersService } from 'src/app/modules/api-rest/services/users.service';
import { Users } from 'src/app/modules/core/models/Users';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
	user: Users;

	constructor(
		private authService: AuthService,
		private userService: UsersService,
		private router: Router
	) {}

	ngOnInit(): void {
		let id = localStorage.getItem('id');
		this.userService.getUser(id).subscribe({
			next: (response) => {
				console.log(response);
				this.user = response;
			},
		});
	}

	logout() {
		this.authService.logout();
		this.router.navigate(['login']);
	}
}
