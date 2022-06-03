import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/homeService.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any;
  sliders: any;
  products: any;
  categories: any;
  brands: any;
  comments:any;
  orders:any;
  cardData: any = [];
  constructor(private HomeService: HomeService) { }

  ngOnInit(): void {
   this.HomeService.getAllDataAdmin().subscribe({
     next: (data) =>{
       this.users = data.users; this.cardData.push({ name: 'users', quantity: this.users.length });
       this.products = data.products; this.cardData.push({ name: 'products', quantity: this.products.length });
       this.sliders = data.sliders; this.cardData.push({ name: 'sliders', quantity: this.sliders.length });
       this.brands = data.brands; this.cardData.push({ name: 'brands', quantity: this.brands.length });
       this.comments = data.comments; this.cardData.push({ name: 'comments', quantity: this.comments.length });
       this.orders = data.orders; this.cardData.push({ name: 'orders', quantity: this.orders.length });
       
     }
   })
   

  }
  
}
