import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProjectService {
	private headers = new HttpHeaders({
		auth: localStorage.getItem('auth'),
	});

	requestOptions = { headers: this.headers };

	constructor(private http: HttpClient) {}
	private url: string = environment.apiUrl;

	//This wil return no results, as no projects are accessible from the endpoint Supplied

	projects(): Observable<any> {
		return this.http.get(this.url + 'projects/1', this.requestOptions);
	}
}
