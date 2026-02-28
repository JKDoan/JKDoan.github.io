import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from '../../components/footer/footer';
import { ContactItem } from '../../components/contact-item/contact-item';

@Component({
  selector: 'app-contact',
  imports: [Navbar, ContactItem, Footer],
  templateUrl: './contact.html',
})
export class Contact {

}
