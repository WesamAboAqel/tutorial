import { Component, input } from '@angular/core';

@Component({
  selector: 'cta-ghost-small',
  imports: [],
  templateUrl: './small.html',
  styleUrl: './small.css',
})
export class GhostSmall {
  text = input<string>();
}
