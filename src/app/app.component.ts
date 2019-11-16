import { Component, OnInit, OnDestroy } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Post } from './Models/post.model';
import { PostsService } from './API/posts.service';

import { constants } from './API/constants'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
  logo: string;
  team: Array<string>;
  constants: Object = constants;

  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(
    private http: HttpClient,
    private postsService: PostsService) { }

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
        console.log(this.loadedPosts)
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.team, postData.name, postData.height);
  }

  setLogo(event) {
    this.logo = event.target.value
    const selectEl = event.target;
    this.team = selectEl.options[selectEl.selectedIndex].getAttribute('data-team');
    this.team = this.team.split(" ")
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      }
    );
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
