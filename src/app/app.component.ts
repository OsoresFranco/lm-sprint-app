import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from './modules/core/services/loading.service';


const DEFAULT_LANG = 'es-AR';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	currentYear = new Date().getFullYear();

	

	constructor(translate: TranslateService, public loadingService: LoadingService) {
		translate.setDefaultLang(DEFAULT_LANG);
	}

	ngOnInit() {}
}
