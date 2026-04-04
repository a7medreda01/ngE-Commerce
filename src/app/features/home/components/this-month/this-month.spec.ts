import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisMonth } from './this-month';

describe('ThisMonth', () => {
  let component: ThisMonth;
  let fixture: ComponentFixture<ThisMonth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThisMonth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThisMonth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
