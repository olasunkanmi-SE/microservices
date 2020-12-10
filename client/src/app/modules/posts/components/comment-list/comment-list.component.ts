import { PostsService } from './../../../core/services/posts.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  @Input() comments: any;
  constructor(private postsService: PostsService) {
    this.postsService.comments$.subscribe((res) => {
      this.comments = res;
    });
  }

  ngOnInit(): void {}
}
