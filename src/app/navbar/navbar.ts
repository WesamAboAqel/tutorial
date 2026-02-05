import { Component } from '@angular/core';
import { Logo } from "../shared/utils/logo/logo";
import { DownChevron } from "../shared/utils/down-chevron/down-chevron";
import { PrimarySmall} from "../shared/cta/primary/small/small";
import { GhostSmall} from '../shared/cta/ghost/small/small';
import { Seperator } from "../shared/utils/seperator/seperator";
import { Language } from "../shared/utils/language/language";

@Component({
  selector: 'app-navbar',
  imports: [Logo, DownChevron, GhostSmall, PrimarySmall, Seperator, Language],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
