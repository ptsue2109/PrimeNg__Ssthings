import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebProductDetailComponent } from './web-product-detail.component';

describe('WebProductDetailComponent', () => {
  let component: WebProductDetailComponent;
  let fixture: ComponentFixture<WebProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
