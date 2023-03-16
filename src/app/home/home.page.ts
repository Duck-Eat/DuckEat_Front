import { Component } from '@angular/core';
import {AuthServiceService} from "../pages/authentication/services/auth-service.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authServiceService:AuthServiceService) {}

}
