import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLisstComponent } from './products-lisst.component';

describe('ProductsLisstComponent', () => {
  let component: ProductsLisstComponent;
  let fixture: ComponentFixture<ProductsLisstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLisstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsLisstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
