import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'status',
})
export class StatusPipe implements PipeTransform {
	transform(value: string | boolean): unknown {
		if (value === 'todo') {
			return 'Pending';
		} else {
			return 'Done';
		}
	}
}
