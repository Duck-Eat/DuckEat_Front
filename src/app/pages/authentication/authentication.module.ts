import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationPageRoutingModule } from './authentication-routing.module';

import { AuthenticationPage } from './authentication.page';
import { ConnectionComponent } from 'src/app/components/connection/connection.component';
import { InscriptionComponent } from 'src/app/components/inscription/inscription.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthenticationPageRoutingModule
  ],
  declarations: [
    AuthenticationPage,
    ConnectionComponent,
    InscriptionComponent
  ]
})
export class AuthenticationPageModule {}
