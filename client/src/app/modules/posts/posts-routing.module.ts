import { PostListComponent } from './components/post-list/post-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostCreateComponent } from './components/post-create/post-create.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      { path: 'create', component: PostCreateComponent },
      { path: 'list', component: PostListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
