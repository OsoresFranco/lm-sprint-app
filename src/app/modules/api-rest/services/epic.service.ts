import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class EpicService {
	private headers = new HttpHeaders({
		auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOnsiZmlyc3QiOiJXYWx0ZXIiLCJsYXN0IjoiTW9saW5hIn0sIl9pZCI6IjYyMDE0Y2RhNGM2NGEzNGNjODg4MWJmZCIsImlkIjoxLCJlbWFpbCI6IndhbHRlcm1vbGluYUBtc24uY29tIiwidXNlcm5hbWUiOiJ3YWx0ZXJtb2xpbmEiLCJfX3YiOjB9LCJpYXQiOjE2NjE4MjQzODAsImV4cCI6MTY2MTkxMDc4MH0.R6oEMS4WDQJ5QoeY2u0CpitHB-Jp9vCepg3Gh079RZU',
	});

	private requestOptions = { headers: this.headers };

	constructor(private http: HttpClient) {}
	private url: string = environment.apiUrl;
	
	epic(id: number): Observable<any> {
		return this.http.get(this.url + 'projects/' + id + '/epics', this.requestOptions);
	}
}
