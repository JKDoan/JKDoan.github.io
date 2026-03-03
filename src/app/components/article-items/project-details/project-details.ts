import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
})
export class ProjectDetails {
  @Input() duur: string = ""
}
