import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models';

@Injectable()
export class UsersService {

	constructor(
		private readonly _http: HttpClient
	) { }

	public getUsers(): Observable<User[]> {
		return this._http.get<User[]>(`${environment.apiUrl}/api/users`);
	}

	public getUser(): Observable<User> {
		return this._http.get<User>(`${environment.apiUrl}/api/users`);
	}
}