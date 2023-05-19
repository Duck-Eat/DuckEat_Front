import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferencePageRoutingModule } from './preference-routing.module';

import { PreferencePage } from './preference.page';
import { PreferenceListComponent } from './components/list/preference-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferencePageRoutingModule
  ],
  declarations: [
    PreferencePage,
    PreferenceListComponent
  ]
})
export class PreferencePageModule {}
