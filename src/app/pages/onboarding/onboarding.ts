import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Navbar } from '../../components/navbar/navbar';
import { Title } from '../../components/article-items/title/title';
import { ProjectDetails } from '../../components/article-items/project-details/project-details';
import { Paragraph } from '../../components/article-items/paragraph/paragraph';
import { ParagraphWithImage } from '../../components/article-items/paragraph-with-image/paragraph-with-image';

@Component({
  selector: 'app-onboarding',
  imports: [Footer, Navbar, Title, ProjectDetails, Paragraph, ParagraphWithImage],
  templateUrl: './onboarding.html',
})
export class Onboarding {

}
