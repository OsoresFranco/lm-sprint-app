import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private apiUrl: string = environment.apiUrl;

	constructor(private readonly http: HttpClient) {}

	login<Users>(user: Users): Observable<Users> {
		return this.http.post<Users>(this.apiUrl + 'login', user);
	}

	logout(): void {
		localStorage.removeItem('auth');
	}
}
