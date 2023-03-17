import { Component, OnInit, Input } from '@angular/core';
import { UserComment } from 'src/app/shared/models/user-comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() comment?: UserComment;
}
