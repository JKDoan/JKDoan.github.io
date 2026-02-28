import { Component  } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Introduction } from '../../components/introduction/introduction';
import { ProjectItem } from '../../components/project-item/project-item';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Introduction, ProjectItem, Footer],
  templateUrl: './home.html',
})
export class Home {

}
