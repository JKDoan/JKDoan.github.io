import { Component } from '@angular/core';
import { Title } from '../../components/article-items/title/title';
import { ProjectDetails } from '../../components/article-items/project-details/project-details';
import { Paragraph } from '../../components/article-items/paragraph/paragraph';

@Component({
  selector: 'app-onboarding',
  imports: [Title, ProjectDetails, Paragraph],
  templateUrl: './onboarding.html',
})
export class Onboarding {

}
