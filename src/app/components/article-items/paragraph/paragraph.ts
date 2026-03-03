import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  imports: [],
  templateUrl: './paragraph.html',
})
export class Paragraph {
  @Input() title: string = ""
  @Input() phase: string = ""
}
