import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductSlideComponent } from './card-product-slide.component';

describe('CardProductSlideComponent', () => {
  let component: CardProductSlideComponent;
  let fixture: ComponentFixture<CardProductSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
