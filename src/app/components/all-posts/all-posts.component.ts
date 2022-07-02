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
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe((resp) => {
      this.postsJson = resp;
      console.log(this.postsJson);
    })
    
  }

}
