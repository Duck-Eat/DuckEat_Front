import {Component, OnInit} from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import {Router} from "@angular/router";
import {AuthServiceService} from "./pages/authentication/services/auth-service.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private authServiceService: AuthServiceService, private router: Router) {
  }
  ngOnInit():void {
     this.authServiceService.checkConnection().then(x => {
       if(x == false){
         this.router.navigate(['/authentication'])
       }
     })

  }
}
