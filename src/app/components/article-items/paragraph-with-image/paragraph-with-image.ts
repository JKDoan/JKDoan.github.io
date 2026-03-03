import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph-with-image',
  imports: [],
  templateUrl: './paragraph-with-image.html',
})
export class ParagraphWithImage {
  @Input() title: string = ""
  @Input() image: string = ""
  @Input() phase: string = ""
}
