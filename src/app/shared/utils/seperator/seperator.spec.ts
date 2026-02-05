import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seperator } from './seperator';

describe('Seperator', () => {
  let component: Seperator;
  let fixture: ComponentFixture<Seperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seperator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
