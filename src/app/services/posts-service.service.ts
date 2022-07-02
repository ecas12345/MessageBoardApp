import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Posts } from '../interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPostsInit = () => {
    const promise = this.http.get(`${environment.postsBaseURL}/Forum/AllPosts`);

    promise.subscribe(resp => {
      sessionStorage.setItem('posts', JSON.stringify(resp));
    },
    error => {
      console.log(error);
    })
  }

  getAllPosts = () => {
    return this.http.get<Posts>(`${environment.postsBaseURL}/Forum/AllPosts`);     
  }

  getAllPostsByUser = (userid) => {
    const headers = new HttpHeaders ({
      'x-user-id': userid
    })
    return this.http.get(`${environment.postsBaseURL}/Forum/AllPostsByUser`,  {
      headers : headers
    });
}
}
