import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/api-rest/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	login: FormGroup;
	usernameError: string = '';

	constructor(
		private fb: FormBuilder,
		private auth: AuthService,
		private router: Router
	) {}

	usernameHasError() {
		if (this.login.controls['username'].errors.required) {
			return 'Username is required';
		} else if (this.login.controls['username'].errors) {
			return 'Minimun length is 4 characters';
		}
	}

	passwordHasError() {
		if (this.login.controls['password'].errors.required) {
			return 'Password is required';
		} else if (this.login.controls['password'].errors) {
			return 'Minimun length is 4 characters';
		}
	}

	ngOnInit(): void {
		this.login = this.fb.group({
			username: ['', [Validators.required, Validators.minLength(4)]],
			password: ['', [Validators.required, Validators.minLength(4)]],
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
