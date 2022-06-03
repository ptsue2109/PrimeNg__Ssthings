import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/shared/services/cartService.service';

@Component({
  selector: 'app-detail-card-product',
  templateUrl: './detail-card-product.component.html',
  styleUrls: ['./detail-card-product.component.scss']
})
export class DetailCardProductComponent implements OnInit {
  @Input() productGallary: any
  @Input() productImg: any;
  @Input() product: any;
  newProducts: any
  constructor(private CartService: CartService) { }
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  ngOnInit(): void {
  }

  Addcart(product: any) {
    this.CartService.addCart(product).subscribe({
      next: (data) =>{
        console.log(data);
        
      },error: (error) =>{
        console.log(error);
      }
    })

  }
}
