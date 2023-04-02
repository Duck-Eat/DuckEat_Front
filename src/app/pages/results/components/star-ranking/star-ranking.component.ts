import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-ranking',
  templateUrl: './star-ranking.component.html',
  styleUrls: ['./star-ranking.component.scss'],
})
export class StarRankingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.remain -= this.value;
  }

  @Input() value: number = 2.5;
  remain: number = 5;

  counter(i: number) {
    i = Math.floor(i);
    return new Array(i);
  }
}
