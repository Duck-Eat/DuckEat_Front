import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { delay, Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {AuthResponse} from "../models/auth-response";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userData !: AuthResponse
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
/*    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
*/

    this.http.post<AuthResponse>(`${environment.baseApiUrl}/login`,
      { id: 0, email: email, password: password }
    ).subscribe(data => {
      this.userData = data
      console.log(this.userData)

      localStorage.setItem("duck-token", JSON.stringify(data))
    })

  }

  signup(name: string, email: string, password: string, password_confirmation: string): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
    };

    this.http.post<boolean>(`${environment.baseApiUrl}/register`,
      { name: name, email: email, password: password, password_confirmation: password_confirmation },
      httpOptions
    ).subscribe(x => console.log(x))

    return of(true).pipe(
      delay(1000),
    )
  }
}
