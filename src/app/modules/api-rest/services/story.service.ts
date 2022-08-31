import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
	private headers = new HttpHeaders({
		auth: localStorage.getItem('auth'),
	});

	private requestOptions = { headers: this.headers };

	constructor(private http: HttpClient) {}
	private url: string = environment.apiUrl;
	
	stories(id: number): Observable<any> {
		return this.http.get(this.url + 'epics/' + id + '/stories', this.requestOptions);
	}

	storyById(id: number): Observable<any> {
		return this.http.get(this.url + 'stories/' + id, this.requestOptions);
	}

	allStories(): Observable<any> {
		return this.http.get(this.url + 'stories/', this.requestOptions);
	}
}
