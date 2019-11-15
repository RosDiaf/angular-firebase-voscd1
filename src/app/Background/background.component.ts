import { Component, Input } from '@angular/core';

@Component({
  selector: 'background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent  {
  @Input() team_url: string;
  @Input() logo: string;
}
