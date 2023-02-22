import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  constructor() { }

  selectMode : string = "connection";

  ngOnInit() {
  }

  changeUI(e:any) {
    this.selectMode = e.detail.value;
    console.log(e.detail.value);
  }

}
