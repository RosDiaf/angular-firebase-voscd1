import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styles: [``]
})

export class PostComponent {
  @Input() loadedPosts: string;
  @Input() isFetching: boolean;
  @Input() error: boolean;
  @Output() handleError = new EventEmitter();

  onHandleError() {
    this.handleError.emit()
  }
}

