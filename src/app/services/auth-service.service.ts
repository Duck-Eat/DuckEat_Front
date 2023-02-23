import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { delay, Observable, of} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<boolean>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };
    this.http.post<boolean>(`${environment.baseApiUrl}/login`,
      {id: 0, email: email, password: password},
      httpOptions
    ).subscribe(x => console.log(x))

    return of(true).pipe(
      delay(1000),
    )
  }
}
