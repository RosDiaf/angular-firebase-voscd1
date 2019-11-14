import { Component, Input } from '@angular/core'

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})

export class LogoComponent {
  @Input() team_url: string;
  @Input() logo: string;
  @Input() teams: Array<string>;
}