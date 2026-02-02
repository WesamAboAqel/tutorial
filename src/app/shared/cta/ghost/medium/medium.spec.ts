import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Medium } from './medium';

describe('Medium', () => {
  let component: Medium;
  let fixture: ComponentFixture<Medium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medium]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Medium);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
