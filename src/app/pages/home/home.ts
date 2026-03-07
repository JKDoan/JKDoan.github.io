import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from '../../components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { HomepageContent } from '../homepage-content/homepage-content';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, RouterOutlet, HomepageContent],
  templateUrl: './home.html',
})
export class Home {

}
