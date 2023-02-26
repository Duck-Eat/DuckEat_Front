import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthResponse} from "../models/auth-response";
import { Storage } from '@ionic/storage-angular';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userData !: AuthResponse
  private isLoggedIn: boolean = false;

   constructor(private http: HttpClient, private storage: Storage, private router: Router) {
     this.storage.create()
  }

  async login(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post<AuthResponse>(`${environment.baseApiUrl}/login`,
      { id: 0, email: email, password: password },
      httpOptions
    ).subscribe(data => {
      this.setUserData(data).then(() => {
        this.router.navigate(['/home'])
      })
    },
    error => {
      console.log("Error")
    });
  }
  async signup(name: string, email: string, password: string, password_confirmation: string) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
    };
    this.http.post<AuthResponse>(`${environment.baseApiUrl}/register`,
      { name: name, email: email, password: password, password_confirmation: password_confirmation },
      httpOptions
    ).subscribe(data => {
        this.setUserData(data).then(() => {
          this.router.navigate(['/home'])
        })
      },
      error => {
        console.log("Error")
      });
  }
  async setUserData(data: AuthResponse): Promise<boolean>{
    return await this.storage.set('userData', data)
  }
  async checkConnection(): Promise<boolean> {
    // Vérifiez l'état de connexion en récupérant les informations de connexion du Storage
    const userData = await this.storage.get('userData');
    if (userData) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
  async logout(){
    this.storage.get('userData').then(x=> {
      this.userData = x
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': `Bearer ${this.userData.token}`})
      };
      this.http.post<AuthResponse>(`${environment.baseApiUrl}/logout`,
        {},
        httpOptions
      ).subscribe(() => {
          this.storage.set('userData', null).then(()=>{
            this.checkConnection().then(x => {
              if(x == false){
                this.router.navigate(['/authentication'])
              }
            })
          })
        },
        error => {
          console.log(error)
        });
    })
  }
}
