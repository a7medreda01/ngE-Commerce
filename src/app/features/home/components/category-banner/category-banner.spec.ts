import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBanner } from './category-banner';

describe('CategoryBanner', () => {
  let component: CategoryBanner;
  let fixture: ComponentFixture<CategoryBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
