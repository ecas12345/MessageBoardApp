import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Posts } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-submit-post',
  templateUrl: './submit-post.component.html',
  styleUrls: ['./submit-post.component.css']
})
export class SubmitPostComponent implements OnInit {

  name = new FormControl();
  title = new FormControl();
  message = new FormControl();
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  submitPost = () => {
    let messageToSubmit = {
      userid: this.name.value, 
      title: this.title.value, 
      message: this.message.value
    } as Posts;
    console.log(messageToSubmit);
    this.postsService.postMessage(messageToSubmit).subscribe(resp => {
        this.name.reset();
        this.title.reset();
        this.message.reset();
        sessionStorage.clear();
    },
    error => {
      alert("failed to post");
    })
  }
}
