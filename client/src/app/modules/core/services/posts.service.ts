import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
environment;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postURL: string;
  commentURL: string;
  headers: any = new HttpHeaders();
  comments = new Subject<any[]>();
  comments$ = this.comments.asObservable();
  constructor(private httpClient: HttpClient) {
    this.postURL = environment.postURL;
    this.commentURL = environment.commentURL;
    this.headers.append('Content-Type', 'application/json; charset=utf-8');
  }

  getPosts() {
    return this.httpClient.get(`${this.postURL}`).pipe();
  }

  createPost(post: any) {
    return this.httpClient.post(`${this.postURL}`, post, this.headers).pipe();
  }

  getComments(id: string) {
    return this.httpClient.get(`${this.commentURL}/${id}`).pipe();
  }

  createComment(id: string, comment: any) {
    return this.httpClient
      .post(`${this.commentURL}/${id}`, comment, this.headers)
      .pipe()
      .subscribe((res: any) => {
        this.comments.next(res);
      });
  }
}
