import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { SwipeCardComponent } from './components/swipe-card/swipe-card.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SwipeButtonsComponent } from './components/swipe-buttons/swipe-buttons.component';
import { EmptyCardsComponent } from './components/empty-cards/empty-cards.component';

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
    SwipeCardComponent,
    CommentsComponent,
    SwipeButtonsComponent,
    EmptyCardsComponent,
    TruncatePipe
  ]
})
export class ResultsPageModule {}
