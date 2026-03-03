import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
})
export class Title {
  @Input() header: string = ""
  @Input() image: string = ""
}
