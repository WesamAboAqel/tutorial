import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownChevron } from './down-chevron';

describe('DownChevron', () => {
  let component: DownChevron;
  let fixture: ComponentFixture<DownChevron>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownChevron]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownChevron);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
