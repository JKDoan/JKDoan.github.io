import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  imports: [],
  templateUrl: './project-item.html',
})
export class ProjectItem {
  @Input() bgcolor: string = "";
  @Input() borderColor: string = "";
  @Input() image: string = ""
  @Input() textColor: string = ""
  @Input() header: string = ""
  @Input() borderHoverColor: string = ""
}
