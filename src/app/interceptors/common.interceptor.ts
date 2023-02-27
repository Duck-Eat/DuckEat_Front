//httpConfig.interceptor.ts
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem("duck-token") != null)
    {
      const token = JSON.parse(localStorage.getItem("duck-token")!).token;

      console.log(token);
    }

    //Authentication by setting header with token value
/*    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': token
        }
      });
    }
*/

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }

    return next.handle(request);
  }


}
