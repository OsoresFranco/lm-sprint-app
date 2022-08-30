import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../../core/models/Users';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	apiUrl: string = environment.apiUrl;

	private headers = new HttpHeaders({
		auth: localStorage.getItem('auth'),
	});

	private requestOptions = { headers: this.headers };

	constructor(private http: HttpClient) {}

	getUser(_id: string): Observable<Users> {
		return this.http.get<Users>(
			this.apiUrl + 'users/' + _id,
			this.requestOptions
		);
	}
}
