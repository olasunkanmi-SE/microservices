import { PostsService } from './modules/core/services/posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  constructor(private postsService: PostsService) {
    let posts = this.postsService.getPosts().subscribe((res) => {
      console.log(res);
    });
  }
}
