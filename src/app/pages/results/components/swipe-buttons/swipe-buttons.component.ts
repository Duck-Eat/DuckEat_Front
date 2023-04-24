import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-swipe-buttons',
  templateUrl: './swipe-buttons.component.html',
  styleUrls: ['./swipe-buttons.component.scss'],
})
export class SwipeButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Output() setLikedEvent = new EventEmitter<void>();
  @Output() setDislikedEvent = new EventEmitter<void>();

  onLikeClicked() {
    this.setLikedEvent.emit();
  }

  onDislikeClicked() {
    this.setDislikedEvent.emit();
  }
}
