import {
	Component,
	OnInit,
} from '@angular/core';
import { LoadingService } from 'src/app/modules/core/services/loading.service';

@Component({
	selector: 'app-progress-spinner',
	templateUrl: './progress-spinner.component.html',
	styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent implements OnInit {
	ngOnChanges() {}

	constructor(public loadingService: LoadingService) {}

	ngOnInit(): void {}
}
