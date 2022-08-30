import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/modules/api-rest/services/users.service';

@Component({
	selector: 'app-user-profile-footer',
	templateUrl: './user-profile-footer.component.html',
	styleUrls: ['./user-profile-footer.component.scss'],
})
export class UserProfileFooterComponent implements OnInit {
	name: string = '';
	surname: string = '';

	constructor(private usersService: UsersService) {}

	ngOnInit(): void {
		let id: string = localStorage.getItem('id');
		this.usersService.getUser(id).subscribe({
			next: (response) => {
				this.name = response.name.first;
				this.surname = response.name.last;
			},
		});
	}
}
