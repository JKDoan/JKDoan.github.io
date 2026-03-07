import { Component } from '@angular/core';
import { Title } from '../../components/article-items/title/title';
import { ProjectDetails } from '../../components/article-items/project-details/project-details';
import { Paragraph } from '../../components/article-items/paragraph/paragraph';
import { ParagraphWithImage } from '../../components/article-items/paragraph-with-image/paragraph-with-image';

@Component({
  selector: 'app-samen-aan-z',
  imports: [Title, ProjectDetails, Paragraph, ParagraphWithImage],
  templateUrl: './samen-aan-z.html',
})
export class SamenAanZ {

}
