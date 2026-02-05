import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { HeroSection } from './hero-section/hero-section';

@Component({
  selector: 'app-root',
  imports: [Navbar, HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tutorial');
}
