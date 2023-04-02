import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { SwipeCardComponent } from './components/swipe-card/swipe-card.component';
import { DetailsComponent } from './components/details/details.component';
import { MapComponent } from './components/map/map.component';
import { CommentsComponent } from './components/comments/comments.component';
import { StarRankingComponent } from './components/star-ranking/star-ranking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ResultsPage,
    RestaurantListComponent,
    RestaurantComponent,
    SwipeCardComponent,
    DetailsComponent,
    MapComponent,
    CommentsComponent,
    StarRankingComponent,
    TruncatePipe
  ]
})
export class ResultsPageModule {}
