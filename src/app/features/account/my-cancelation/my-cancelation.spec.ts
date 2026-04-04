import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCancelation } from './my-cancelation';

describe('MyCancelation', () => {
  let component: MyCancelation;
  let fixture: ComponentFixture<MyCancelation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCancelation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCancelation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
