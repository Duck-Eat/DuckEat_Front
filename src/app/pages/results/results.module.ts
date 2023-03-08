import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { RestaurantListComponent } from 'src/app/components/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from 'src/app/components/restaurant/restaurant.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule
  ],
  declarations: [
    ResultsPage,
    RestaurantListComponent,
    RestaurantComponent
  ]
})
export class ResultsPageModule {}
