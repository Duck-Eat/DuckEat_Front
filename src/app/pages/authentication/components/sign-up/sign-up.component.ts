import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/pages/authentication/services/auth-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(public _authService: AuthServiceService) { }

  ngOnInit() {}

  name!: string;
  email!: string;
  password!: string;
  confirm!: string;

  onSubmit() {
    this._authService?.signup(this.name, this.email, this.password, this.confirm);
  }

}
