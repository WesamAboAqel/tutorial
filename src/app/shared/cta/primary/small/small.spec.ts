import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySmall } from './small';

describe('Small', () => {
  let component: PrimarySmall;
  let fixture: ComponentFixture<PrimarySmall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimarySmall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimarySmall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
