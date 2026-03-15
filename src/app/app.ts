import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from "./footer/footer";
import { Carousel } from "./carousel/carousel";
import { Home } from "./home/home";
import { Contact } from './contact/contact';
import { Course } from "./course/course";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
}
