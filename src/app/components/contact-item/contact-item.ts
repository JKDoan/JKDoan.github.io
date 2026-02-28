import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  imports: [],
  templateUrl: './contact-item.html',
})
export class ContactItem {
  @Input() header: string = "";
  @Input() content: string = "";
}
