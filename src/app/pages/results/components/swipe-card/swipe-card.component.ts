import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { GestureController, IonCard, Platform } from '@ionic/angular';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { RestaurantServiceService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-swipe-card',
  templateUrl: './swipe-card.component.html',
  styleUrls: ['./swipe-card.component.scss'],
})
export class SwipeCardComponent implements OnInit, AfterViewInit {

  restaurants!: Restaurant[];

  @ViewChildren(IonCard, { read: ElementRef })
  cards: QueryList<ElementRef>;

  isLoading: boolean = true;
  last: number = 10;
  @Output() setEmptyEvent = new EventEmitter<boolean>();

  constructor(public _restaurantService: RestaurantServiceService, private gestureCtrl: GestureController, private plt: Platform) {}

  ngOnInit() {
    this._restaurantService.getRandomRestaurants().subscribe({
      next: (res: any) => { this.restaurants = res.data; this.isLoading = false },
      error: error => console.error(error)
    });
  }

  ngAfterViewInit() {
    this.cards.changes.subscribe((r) => {
      this.useSwipe(this.cards.toArray());
    });
  }

  setIsEmpty(value: boolean) {
    this.setEmptyEvent.emit(value);
  }

  useSwipe(cardArray: any) {

    for (let i = 0; i < cardArray.length; i++) {

      const card = cardArray[i];
      const gesture = this.gestureCtrl.create({

        el: card.nativeElement,
        gestureName: "swipe",
        onStart: ev => { },
        onMove: ev => {
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 20}deg)`;
        },
        onEnd: ev => {
          card.nativeElement.style.transition = ".5s ease-out";

          if (ev.deltaX > 150) {
            card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px) rotate(${ev.deltaX / 4}deg)`;
            this.like(card.nativeElement, 1000);

          } else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(-${+this.plt.width() * 2}px) rotate(${ev.deltaX / 4}deg)`;
            this.dislike(card.nativeElement, 1000);

          } else {
            card.nativeElement.style.transform = "";
            setTimeout(() => {
              card.nativeElement.style.transition = ".1s ease-out";
            }, 500);
          }
        }
      });

      gesture.enable(true);
    }
  }

  onLiked() {
    const cardArray = this.cards.toArray();
    this.like(cardArray[this.last-1].nativeElement, 0);
  }

  onDisliked() {
    const cardArray = this.cards.toArray();
    this.dislike(cardArray[this.last-1].nativeElement, 0);
  }

  like(card: any, timer: number) {
    this.setLast(this.last -1);

    setTimeout(() => {
      card.remove();
      // console.log("right");
    }, timer);
  }

  dislike(card: any, timer: number) {
    this.setLast(this.last -1);

    setTimeout(() => {
      card.remove();
      // console.log("left");
    }, timer);
  }

  setLast(n: number) {
    this.last = n;
    // console.log(this.last);
    if (this.last <= 0) {
      this.setIsEmpty(true);
    }
  }
}
