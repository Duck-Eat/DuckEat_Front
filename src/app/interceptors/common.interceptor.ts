//httpConfig.interceptor.ts
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {from, lastValueFrom, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage-angular";

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor(private storage: Storage) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return from(this.handle(req, next))
  }

  async handle(request: HttpRequest<any>, next: HttpHandler) {
    const userData = await this.storage.get('userData');
    if (userData) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${userData.token}`
        }
      });
    }
    request = request.clone({
      setHeaders: {
        'content-type' : 'application/json',
        'Accept' : 'application/json',
      }
    });

    return await lastValueFrom(next.handle(request));
  }






}
