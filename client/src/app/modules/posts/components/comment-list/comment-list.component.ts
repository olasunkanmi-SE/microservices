import { PostsService } from './../../../core/services/posts.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  @Input() post: any;
  @Input() comments: any;
  constructor(private postsService: PostsService) {
    postsService.comments$.subscribe((res) => {
      this.comments = res;
    });
  }

  ngOnInit(): void {
    this.fetchComments();
  }
  fetchComments() {
    this.postsService.getComments(this.post.id).subscribe((res) => {
      if (res) {
        this.comments = res;
      }
    });
  }
}
