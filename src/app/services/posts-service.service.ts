import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Posts } from '../interfaces/posts';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Posts;

  constructor(private http: HttpClient) { }

  setAllPosts = new Promise(() => {
    this.getAllPosts().subscribe((resp) => {
      resolve();
      this.posts = resp;
    },
    (error: HttpErrorResponse) => {

    })
    if (sessionStorage.getItem('posts') !== null) {

    }
    else {
      this.getAllPosts().subscribe((resp) => {
        this.posts = resp;
      })
    }
  }).then((posts) => {
    sessionStorage.setItem('posts', JSON.stringify(posts));
  })

  getAllPostsByUser = (userid) => {
    const headers = new HttpHeaders({
      'x-user-id': userid
    })
    return this.http.get(`${environment.postsBaseURL}/Forum/AllPostsByUser`, {
      headers: headers
    });
  }

  getAllPosts = () => {
    return this.http.get<Posts>(`${environment.postsBaseURL}/Forum/AllPostsByUser`);
  }
}
