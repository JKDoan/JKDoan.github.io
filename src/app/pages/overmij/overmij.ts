import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from '../../components/footer/footer';
import { DraggableImage } from '../../components/draggable-image/draggable-image';

@Component({
  selector: 'app-overmij',
  imports: [Navbar, DraggableImage, Footer],
  templateUrl: './overmij.html',
})
export class Overmij {

}
