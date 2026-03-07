import { Component } from '@angular/core';
import { Introduction } from "../../components/introduction/introduction";
import { ProjectItem } from "../../components/project-item/project-item";
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage-content',
  imports: [Introduction, ProjectItem, RouterOutlet, RouterLink],
  templateUrl: './homepage-content.html',
})
export class HomepageContent {

}
