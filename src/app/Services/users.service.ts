import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI, ResultsJWT } from '../Models/auth';
import { Usuarios } from '../Static/path-rest';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private _http: HttpClient, private route: Router,) { }

  login(login: LoginI): Observable<ResultsJWT> {
    return this._http.post(Usuarios.POST_LOGIN, login) as Observable<ResultsJWT>
  }

  register(register: LoginI): Observable<ResultsJWT> {
    return this._http.post(Usuarios.POST_REGISTRO, register) as Observable<ResultsJWT>
  }

  cerrarSesion() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
