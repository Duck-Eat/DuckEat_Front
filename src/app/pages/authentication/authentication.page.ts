import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  selectMode : string = "connection";

  constructor() {
  }
  ngOnInit() {

  }

  changeUI(e:any) {
    this.selectMode = e.detail.value;
    console.log(e.detail.value);
  }
}
