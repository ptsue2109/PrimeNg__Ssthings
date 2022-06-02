import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/homeService.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: any;
  brands:any;
  sliders:any;
  
  constructor(private HomeService: HomeService) { }

  ngOnInit(): void {
    this.HomeService.getAllData().subscribe(data =>{
      this.categories = data.categories;
      this.brands = data.brands
      this.sliders = data.sliders
    })
  }

}
