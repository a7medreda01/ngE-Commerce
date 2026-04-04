import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedItem } from './related-item';

describe('RelatedItem', () => {
  let component: RelatedItem;
  let fixture: ComponentFixture<RelatedItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
