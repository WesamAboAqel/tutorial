import { Component, input } from '@angular/core';

@Component({
  selector: 'cta-primary-large',
  imports: [],
  templateUrl: './large.html',
  styleUrl: './large.css',
})
export class PrimaryLarge {
  text = input<string>();
}
