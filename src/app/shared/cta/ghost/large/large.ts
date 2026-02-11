import { Component, input } from '@angular/core';

@Component({
  selector: 'cta-ghost-large',
  imports: [],
  templateUrl: './large.html',
  styleUrl: './large.css',
})
export class GhostLarge {
  text = input<string>();
}
