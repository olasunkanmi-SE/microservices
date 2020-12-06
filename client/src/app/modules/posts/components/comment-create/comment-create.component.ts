import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from './../../../core/services/posts.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss'],
})
export class CommentCreateComponent implements OnInit {
  @Input() post: any;
  comments: any;
  commentForm: AbstractControl;
  constructor(
    private postService: PostsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.commentForm = this.formBuilder.group({
      content: ['', [Validators.required]],
    });
  }

  createComment() {
    this.postService.createComment(this.post.id, this.commentForm.value);
  }
}
