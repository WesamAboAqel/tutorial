import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryLarge } from './large';

describe('Large', () => {
  let component: PrimaryLarge;
  let fixture: ComponentFixture<PrimaryLarge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryLarge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryLarge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
