import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsersService {

	constructor(
		private readonly _http: HttpClient
	) { }

	public getUsers(): Observable<any> {
		return this._http.get(`${environment.apiUrl}/api/users`);
	}

	public getUser(): Observable<any> {
		return this._http.get(`${environment.apiUrl}/api/users`);
	}
}