import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationPageRoutingModule } from './authentication-routing.module';

import { AuthenticationPage } from './authentication.page';
import { ConnectionComponent } from 'src/app/pages/authentication/components/connection/connection.component';
import { SignUpComponent } from 'src/app/pages/authentication/components/sign-up/sign-up.component';
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthenticationPageRoutingModule,
    SharedModule
  ],
  declarations: [
    AuthenticationPage,
    ConnectionComponent,
    SignUpComponent
  ]
})
export class AuthenticationPageModule {}
