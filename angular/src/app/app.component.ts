import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from './providers/users.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public users$: Observable<any> = this._usersService.getUsers();

	constructor(
		private readonly _usersService: UsersService
	) { }
}