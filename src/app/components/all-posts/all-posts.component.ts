import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/posts';
import { PostsService } from '../../services/posts-service.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  postsJson: Posts;
  refreshDisabled: boolean;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('posts') === null){
      this.postsService.getAllPosts().subscribe((resp) => {
        sessionStorage.setItem('posts',JSON.stringify(resp));
        this.postsJson = resp;
      })
    } else {
      this.postsJson = JSON.parse(sessionStorage.getItem('posts'));
    }
  }

  refreshPosts() {
    this.refreshDisabled = true;
    this.postsService.getAllPosts().subscribe((resp) => {
      this.postsJson = resp;
      this.refreshDisabled = false;
    });
  }
}
