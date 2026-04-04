import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustForYou } from './just-for-you';

describe('JustForYou', () => {
  let component: JustForYou;
  let fixture: ComponentFixture<JustForYou>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustForYou]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustForYou);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
