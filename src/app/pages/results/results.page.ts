import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IonCard } from '@ionic/angular';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  constructor() { }

  ngOnInit() { }

  isEmpty: boolean = false;

  setEmpty(b: boolean) {
    this.isEmpty = b;
    // console.log(b);
  }

}
