import { Component, Input } from '@angular/core'

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styles: [``]
})

export class AlertComponent {
  @Input() message: string;
  @Input() msgType: string;
}