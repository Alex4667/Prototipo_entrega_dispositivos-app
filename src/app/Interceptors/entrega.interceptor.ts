import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class EntregaInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const access_token = localStorage.getItem('access_token')!;

    if (access_token) {
      let cloned = request.clone({
        headers: request.headers
          .set('Authorization', 'Bearer ' + access_token)
          .set('Content-Type', 'aplication/json'),
      });
      return next.handle(cloned);
    } else {
      return next
        .handle(request);
    }

  }
}
