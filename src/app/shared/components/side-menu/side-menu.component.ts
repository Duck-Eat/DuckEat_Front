import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../../pages/authentication/services/auth-service.service";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(public authServiceService: AuthServiceService) { }

  ngOnInit() {}

}
