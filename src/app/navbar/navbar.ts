import { Component } from '@angular/core';
import { Logo } from "../logo/logo";
import { DownChevron } from "../down-chevron/down-chevron";

@Component({
  selector: 'app-navbar',
  imports: [Logo, DownChevron],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
