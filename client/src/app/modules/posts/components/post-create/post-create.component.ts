import { PostsService } from './../../../core/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  postForm: AbstractControl;
  constructor(
    private formBuilder: FormBuilder,
    private PostsService: PostsService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });
  }

  createPost() {
    this.PostsService.createPost(this.postForm.value).subscribe((res) => {
      console.log(res);
      console.log(this.postForm.value);
    });
  }
}
