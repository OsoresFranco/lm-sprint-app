import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProjectService {
	headers = new HttpHeaders({
		auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOnsiZmlyc3QiOiJXYWx0ZXIiLCJsYXN0IjoiTW9saW5hIn0sIl9pZCI6IjYyMDE0Y2RhNGM2NGEzNGNjODg4MWJmZCIsImlkIjoxLCJlbWFpbCI6IndhbHRlcm1vbGluYUBtc24uY29tIiwidXNlcm5hbWUiOiJ3YWx0ZXJtb2xpbmEiLCJfX3YiOjB9LCJpYXQiOjE2NjE3OTc4NDUsImV4cCI6MTY2MTg4NDI0NX0.JoWb6RZ-URWvAXVZVExgSz-1pZM99RJ4XzCbPmsmkBs',
	});

	requestOptions = { headers: this.headers };

	constructor(private http: HttpClient) {}
	private url: string = environment.apiUrl;

	//This wil return no results, as no projects are accessible from the endpoint Supplied

	projects(): Observable<any> {
		return this.http.get(this.url + 'projects/1', this.requestOptions);
	}
}
