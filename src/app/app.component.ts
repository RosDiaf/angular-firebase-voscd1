import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  heights:Array<number> = [];
  constants: Object = constants;
  playerForm: FormGroup;

  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(
  private http: HttpClient,
  private postsService: PostsService,
  private formBuilder: FormBuilder) {

  this.buildSearchCityForm();
  this.heights = Array.from({length:80},(v,k)=>k+1);
  }

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

  buildSearchCityForm() {
    this.playerForm = this.formBuilder.group({
      team: this.formBuilder.control(null, [Validators.required, Validators.pattern('^(?=[a-zA-Z ])([A-Za-z ]*)+$')]),
      name: this.formBuilder.control(null, [Validators.required, Validators.pattern('^(?=[a-zA-Z ])([A-Za-z ]*)+$')]),
      height: this.formBuilder.control(null, [Validators.required]),
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.team, postData.name, postData.height);
  }

  setLogo(event) {
    this.logo = event.target.value
    const selectEl = event.target;
    this.team = selectEl.options[selectEl.selectedIndex].getAttribute('data-team');
    this.team = this.team.split(" ")
  }

  onFetchPosts() {
    // Send Http request
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
    // Send Http request
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
