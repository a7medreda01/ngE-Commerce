import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBanners } from './first-banners';

describe('FirstBanners', () => {
  let component: FirstBanners;
  let fixture: ComponentFixture<FirstBanners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstBanners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstBanners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
