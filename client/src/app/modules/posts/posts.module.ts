import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentCreateComponent } from './components/comment-create/comment-create.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostListComponent,
    PostCreateComponent,
    CommentListComponent,
    CommentCreateComponent,
  ],
  imports: [CommonModule, PostsRoutingModule],
})
export class PostsModule {}
