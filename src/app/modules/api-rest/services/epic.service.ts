import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class EpicService {
	private headers = new HttpHeaders({
		auth: localStorage.getItem('auth'),
	});

	private requestOptions = { headers: this.headers };

	constructor(private http: HttpClient) {}
	private url: string = environment.apiUrl;

	epic(id: number): Observable<any> {
		return this.http.get(
			this.url + 'projects/' + id + '/epics',
			this.requestOptions
		);
	}
}
