import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-dialog-form',
	templateUrl: './dialog-form.component.html',
	styleUrls: ['./dialog-form.component.scss'],
})
export class DialogFormComponent implements OnInit {
	form:FormGroup;

	test() {
		console.log(this.form.value)
	}

	constructor(private fb:FormBuilder) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			name: new FormControl('', Validators.required),
			description: new FormControl('', Validators.minLength(10)),
			story: new FormControl('620192ba5d34515ecc3adafa'),
		});
	}
}
