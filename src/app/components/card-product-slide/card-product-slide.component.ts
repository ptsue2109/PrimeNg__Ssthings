import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-product-slide',
  templateUrl: './card-product-slide.component.html',
  styleUrls: ['./card-product-slide.component.scss']
})
export class CardProductSlideComponent implements OnInit {
  responsiveOptions
  @Input() data: any;
  @Input () Title : string
  constructor() {
    this.Title = '';
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ;
  ngOnInit(): void {
  }

}
