import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
	constructor(public loader: LoadingService) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		this.loader.isLoading.next(true);

		return next.handle(req).pipe(
			finalize(() => {
				setTimeout(() => {
					this.loader.isLoading.next(false);
				}, 100);
			})
		);
	}
}
