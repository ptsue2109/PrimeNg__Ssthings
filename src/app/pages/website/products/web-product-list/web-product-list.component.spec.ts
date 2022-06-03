import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebProductListComponent } from './web-product-list.component';

describe('WebProductListComponent', () => {
  let component: WebProductListComponent;
  let fixture: ComponentFixture<WebProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
