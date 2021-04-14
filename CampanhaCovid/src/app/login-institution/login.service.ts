import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postLogIn(userName: String, password: String): Observable<any> {
    return this.http.post(API + '/api/Autenticacao/authenticate', { userName, password }, { observe: 'response'})
  }

}
