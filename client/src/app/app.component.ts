import { PostsService } from './modules/core/services/posts.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  postForm: AbstractControl;
  posts$;

  constructor(
    private formBuilder: FormBuilder,
    private PostsService: PostsService
  ) {
    this.initializeForm();
    this.fetchPosts();
  }

  ngOnInit(): void {}

  initializeForm() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });
  }

  createPost() {
    this.PostsService.createPost(this.postForm.value).subscribe(
      (res) => {
        this.posts$ = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  fetchPosts() {
    this.PostsService.getPosts().subscribe(
      (res) => {
        this.posts$ = Object.values(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
