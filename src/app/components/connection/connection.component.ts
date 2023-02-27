import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent implements OnInit {

  email!: string
  password!: string

  constructor(public _authService: AuthServiceService) { }

  ngOnInit() {}

  onSubmit() {
    this._authService?.login(this.email,this.password)
  }

}
