import { Injectable } from '@angular/core';
import { LocalstorageJWT, IJWT } from '../Static/localstorage';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  login(token: string): void {
    const decode = jwt_decode<IJWT>(token);
    let json = JSON.stringify(decode);
    let jsonObject = JSON.parse(json);
    localStorage.setItem(LocalstorageJWT.LS_JWT, token);
    console.log(jsonObject);

  }

  constructor() { }
}