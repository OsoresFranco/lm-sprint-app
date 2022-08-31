import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/api-rest/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	login: FormGroup;

	constructor(
		private fb: FormBuilder,
		private auth: AuthService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.login = this.fb.group({
			username: '',
			password: '',
		});
	}

	loginSubmit() {
		this.auth.login(this.login.value).subscribe({
			next: (response) => {
				localStorage.setItem('auth', response.token);
				localStorage.setItem('id', response.user._id);
			},
			error: (response) => {
				console.log(response);
			},
			complete: () => {
				this.router.navigate(['']);
			},
		});
	}
}
