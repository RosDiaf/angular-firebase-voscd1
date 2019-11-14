import { Component, Input } from '@angular/core';

@Component({
  selector: 'background',
  templateUrl: './background.component.html',
  styles: [``]
})
export class BackgroundComponent  {
  @Input() team_url: string;
  @Input() logo: string;
}
