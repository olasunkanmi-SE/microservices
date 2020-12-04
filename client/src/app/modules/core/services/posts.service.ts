import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
environment;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  backendURL: string;
  constructor(private httpClient: HttpClient) {
    this.backendURL = environment.postURL;
  }

  getPosts() {
    return this.httpClient.get(`${this.backendURL}`);
  }
}
