import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
environment;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postURL: string;
  commentURL: string;
  constructor(private httpClient: HttpClient) {
    this.postURL = environment.postURL;
    this.commentURL = environment.commentURL;
  }

  getPosts() {
    return this.httpClient.get(`${this.postURL}`).pipe();
  }

  createPost(post: any) {
    let headers: any = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post(`${this.postURL}`, post, headers).pipe();
  }

  getComments(id: string) {
    return this.httpClient.get(`${this.commentURL}/${id}`).pipe();
  }
}
