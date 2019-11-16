import { Component, Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { constants } from '../API/constants'
import { Post } from '../Models/post.model';

@Component({
  selector: 'player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent {

  heights:Array<number> = [];
  weights:Array<number> = [];
  constants: Object = constants;
  playerForm: FormGroup;

  @Output() createPost = new EventEmitter();
  @Output() changeLogo = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.buildSearchCityForm();
    this.heights = Array.from({length:80},(v,k)=>k+1);
    this.weights = Array.from({length:122},(v,k)=>k+1);
  }

  buildSearchCityForm() {
    this.playerForm = this.formBuilder.group({
      team: this.formBuilder.control(null, [Validators.required, Validators.pattern('^(?=[a-zA-Z ])([A-Za-z ]*)+$')]),
      name: this.formBuilder.control(null, [Validators.required, Validators.pattern('^(?=[a-zA-Z ])([A-Za-z ]*)+$')]),
      height: this.formBuilder.control(null, [Validators.required]),
      weight: this.formBuilder.control(null, [Validators.required]),
    });
  }

  onCreatePost(postData: Post) {
    console.log(postData)
    this.createPost.emit(postData)
  }

  setLogo(event) {
    this.changeLogo.emit(event)
  }
}