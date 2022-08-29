import { Component, OnInit } from '@angular/core';
import { Stories } from 'src/app/modules/core/models/Stories';

@Component({
  selector: 'app-my-user-stories',
  templateUrl: './my-user-stories.component.html',
  styleUrls: ['./my-user-stories.component.scss']
})
export class MyUserStoriesComponent implements OnInit {
	title:string = 'My Stories'
	cards: Stories[] = [
    {
      assignedTo: ['6261aa79e81ff6207410e690'],
      points: 4,
      status: 'todo',
      _id: '620192ba5d34515ecc3adafa',
      id: 45,
      name: 'Crear pagina landing 1',
      description:
        'Esta es la descripcion de la user story esta, pero debe ser muy larga y por eso se va a mas de dos lineas',
      epic: '62017253df85e917808d11f0',
      created: '2022-02-07T21:44:26.346Z',
      owner: 'No sé',
      __v: 456,
    },
    {
      assignedTo: ['6261aa79e81ff6207410e690'],
      points: 4,
      status: 'todo',
      _id: '620192ba5d34515ecc3adafa',
      id: 46,
      name: 'Crear pagina landing 2',
      description:
        'Esta es la descripcion de la user story esta, pero debe ser muy larga y por eso se va a mas de dos lineas',
      epic: '62017253df85e917808d11f0',
      created: '2022-02-07T21:44:26.346Z',
      owner: 'No sé',
      __v: 456,
    },
    {
      assignedTo: ['6261aa79e81ff6207410e690'],
      points: 4,
      status: 'todo',
      _id: '620192ba5d34515ecc3adafa',
      id: 47,
      name: 'Crear pagina landing 3',
      description:
        'Esta es la descripcion de la user story esta, pero debe ser muy larga y por eso se va a mas de dos lineas',
      epic: '62017253df85e917808d11f0',
      created: '2022-02-07T21:44:26.346Z',
      owner: 'No sé',
      __v: 456,
    },
    {
      assignedTo: ['6261aa79e81ff6207410e690'],
      points: 4,
      status: 'todo',
      _id: '620192ba5d34515ecc3adafa',
      id: 48,
      name: 'Crear pagina landing 4',
      description:
        'Esta es la descripcion de la user story esta, pero debe ser muy larga y por eso se va a mas de dos lineas',
      epic: '62017253df85e917808d11f0',
      created: '2022-02-07T21:44:26.346Z',
      owner: 'No sé',
      __v: 456,
    }
	];

	constructor() {}

	ngOnInit(): void {}
}
