import { Component, Input, OnInit } from '@angular/core';
import { Comments } from '../Models/Comments.interface';

@Component({
  selector: 'app-comment-template',
  templateUrl: './comment-template.component.html',
  styleUrls: ['./comment-template.component.scss']
})
export class CommentTemplateComponent implements OnInit {
  @Input() infoComment!: Comments;

  constructor() { }

  ngOnInit(): void {
  }

}
