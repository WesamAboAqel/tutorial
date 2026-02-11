import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostSmall } from './small';

describe('GhostSmall', () => {
  let component: GhostSmall;
  let fixture: ComponentFixture<GhostSmall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GhostSmall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhostSmall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
