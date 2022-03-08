import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public posts: Post[];

  constructor(private postService: PostService) {
    this.posts = []
  }

  ngOnInit() {
    this.getPosts();
  }

  public getPosts(): void {
    this.postService.getPosts().subscribe(
      (response: Post[]) => {
        this.posts = response;
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

      );
  }
}
