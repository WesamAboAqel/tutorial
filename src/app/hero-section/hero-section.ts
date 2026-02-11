import { Component } from '@angular/core';
import { PrimaryLarge } from "../shared/cta/primary/large/large";
import { GhostLarge } from "../shared/cta/ghost/large/large";

@Component({
  selector: 'app-hero-section',
  imports: [PrimaryLarge, GhostLarge],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

}
