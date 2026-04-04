import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCategory } from './browse-category';

describe('BrowseCategory', () => {
  let component: BrowseCategory;
  let fixture: ComponentFixture<BrowseCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
