import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-web-product-detail',
  templateUrl: './web-product-detail.component.html',
  styleUrls: ['./web-product-detail.component.scss']
})
export class WebProductDetailComponent implements OnInit {
  id: string;
  product: any;
  productImg: any;
  productGallary: any
  constructor(private ProductsService:ProductsService, private ActivatedRoute: ActivatedRoute) {this.id = '' }

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.ProductsService.getOneById(this.id).subscribe({
      next : (data) =>{
        this.product = data;
        this.productImg = Array.of( data.image);
        this.productGallary = data.image_mutiple;
      } ,
      error: (error) =>{
        console.log(error);
      }
    })
  }

}
