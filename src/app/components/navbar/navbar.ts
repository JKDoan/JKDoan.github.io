import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {

}
