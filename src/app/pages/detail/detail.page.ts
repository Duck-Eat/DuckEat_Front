import { Component, OnInit } from '@angular/core';
import { UserComment } from 'src/app/shared/models/user-comment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor() {
    this.comments.push(new UserComment("test", "vboiukzesbnvenfzbnvorbnvzoebnvonbverhnvzohvbsoibvnsderobvseolibvsdrlibvsrdloiujbv", 5));
  }

  ngOnInit() { }

  comments: UserComment[] = new Array();
}
