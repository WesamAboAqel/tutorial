import { Component, input } from '@angular/core';

@Component({
  selector: 'cta-primary-small',
  imports: [],
  templateUrl: './small.html',
  styleUrl: './small.css',
})
export class PrimarySmall {
  text = input<string>();
}
