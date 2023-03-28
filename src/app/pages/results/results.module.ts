import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { SwipeCardComponent } from './components/swipe-card/swipe-card.component';
import { HammerModule } from '@angular/platform-browser';

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
    RestaurantComponent,
    SwipeCardComponent,
    TruncatePipe
  ]
})
export class ResultsPageModule {}
