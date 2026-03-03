import { Component  } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Introduction } from '../../components/introduction/introduction';
import { ProjectItem } from '../../components/project-item/project-item';
import { Footer } from '../../components/footer/footer';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Navbar, Introduction, ProjectItem, Footer, RouterOutlet, RouterLink],
  templateUrl: './home.html',
})
export class Home {

}
