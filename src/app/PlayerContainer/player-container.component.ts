import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Post, Player } from '../Models/post.model';
import { PostsService } from '../API/posts.service';

import { constants } from '../API/constants';
import { getSingleObject } from '../Shared/getSingleObject';

@Component({
  selector: 'player-container',
  templateUrl: './player-container.component.html',
  styleUrls: [ './player-container.component.scss' ]
})

export class PlayerContainer implements OnInit, OnDestroy {

  logo: string;
  team: Array<string>;
  isSaved: boolean = false;
  constants: Object = constants;

  loadedPosts: Post[] = [];
  newPlayer: Player[] = [];
  postKeys: Array<string>;
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
        this.loadedPosts = getSingleObject(posts)
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onCreatePost(postData: Post) {
    this.newPlayer.push(
      new Player(
        postData.team,
        postData.name,
        postData.height,
        postData.weight,
        Math.floor(Math.random())
      )
    )
  }

  savePosts() {
    this.postsService.createAndStorePost(this.newPlayer)
      .subscribe(
        responseData => {
          this.isSaved = true;
          setTimeout(() => {
            this.isSaved = false;
            this.newPlayer.length = 0;
          }, 2000);
        },
        error => {
          this.error.next(error.message);
        }
      );
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
        this.loadedPosts = getSingleObject(posts);
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