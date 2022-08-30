import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tasks } from '../../core/models/Tasks';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	private _refresh$ = new Subject<any>();

	get refresh$() {
		return this._refresh$;
	}

	private headers = new HttpHeaders({
		auth: localStorage.getItem('auth'),
	});

	private requestOptions = { headers: this.headers };

	constructor(private http: HttpClient) {}
	private url: string = environment.apiUrl;

	tasks(id: number): Observable<any> {
		return this.http.get(
			this.url + 'stories/' + id + '/tasks',
			this.requestOptions
		);
	}

	taskEdit(task: Tasks): Observable<any> {
		return this.http.put(
			this.url + 'tasks/' + task.id,
			task,
			this.requestOptions
		);
	}

	taskDelete(task: Tasks): Observable<any> {
		return this.http
			.delete(this.url + 'tasks/' + task.id, this.requestOptions)
			.pipe(
				tap(() => {
					this._refresh$.next();
				})
			);
	}

	taskPost(task: Tasks): Observable<any> {
		return this.http
			.post(this.url + 'tasks', task, this.requestOptions)
			.pipe(
				tap(() => {
					this._refresh$.next();
				})
			);
	}
}
