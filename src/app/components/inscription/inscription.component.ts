import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {

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
