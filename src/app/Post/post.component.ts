import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core'
import { constants } from '../API/constants'

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnChanges  {
  constants: Object = constants;
  @Input() loadedPosts: Array<string>;
  @Input() isFetching: boolean;
  @Input() error: boolean;
  @Output() handleError = new EventEmitter();
  dataKeys: Array<string> = []

  constructor() {}

  ngOnChanges() {
    // const [ team, name, height, width ] = this.loadedPosts
  }

  onHandleError() {
    this.handleError.emit()
  }
}

