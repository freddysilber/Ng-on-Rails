import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public users$: Observable<any> = this._http.get(environment.apiUrl + '/api/users')

  constructor(
    private readonly _http: HttpClient
  ) { }
}
