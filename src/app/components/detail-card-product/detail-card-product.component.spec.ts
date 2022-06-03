import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCardProductComponent } from './detail-card-product.component';

describe('DetailCardProductComponent', () => {
  let component: DetailCardProductComponent;
  let fixture: ComponentFixture<DetailCardProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCardProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
