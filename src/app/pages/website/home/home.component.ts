import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/homeService.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: any;
  brands:any;
  sliders:any;
  productsNew: any;
  constructor(private HomeService: HomeService) { }

  ngOnInit(): void {
    this.HomeService.getAllData().subscribe(data =>{
      this.categories = data.categories;
      this.sliders = data.sliders
      this.productsNew = data.productsNew;
      this.brands = data.brands
    })
  }

}
