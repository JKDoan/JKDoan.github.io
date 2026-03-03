import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Navbar } from '../../components/navbar/navbar';
import { Title } from '../../components/article-items/title/title';

@Component({
  selector: 'app-samen-aan-z',
  imports: [Footer, Navbar, Title],
  templateUrl: './samen-aan-z.html',
})
export class SamenAanZ {

}
