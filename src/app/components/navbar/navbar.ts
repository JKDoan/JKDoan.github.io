import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, RouterLink, NgStyle],
  templateUrl: './navbar.html',
})
export class Navbar {

  visible: boolean = false

  activate(): void {
    this.visible = !this.visible
  }
}
