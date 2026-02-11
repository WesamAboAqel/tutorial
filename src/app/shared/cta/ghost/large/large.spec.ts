import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostLarge } from './large';

describe('GhostLarge', () => {
  let component: GhostLarge;
  let fixture: ComponentFixture<GhostLarge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GhostLarge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhostLarge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
